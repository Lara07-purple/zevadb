import { promises as fs } from "node:fs";
import { z, type ZodType } from "zod";

type SchemaRecord = Record<string, ZodType>;

type InferSchemaData<TSchemas extends SchemaRecord> = {
  [K in keyof TSchemas]: z.infer<TSchemas[K]>;
};

interface ZevaDBOptions<TSchemas extends SchemaRecord> {
  path: string;
  schemas: TSchemas;
  initial: InferSchemaData<TSchemas>;
}

type Migration<TSchemas extends SchemaRecord> = (
  prevData: InferSchemaData<TSchemas>
) => InferSchemaData<TSchemas>;

interface NamedMigration<TSchemas extends SchemaRecord> {
  name: string;
  migrate: Migration<TSchemas>;
}

interface ZevaDBFile<TSchemas extends SchemaRecord> {
  _version: number;
  data: InferSchemaData<TSchemas>;
}

export class ZevaDB<TSchemas extends SchemaRecord> {
  private path: string;
  private schemas: TSchemas;
  public data: InferSchemaData<TSchemas>;
  private migrations: Array<NamedMigration<TSchemas>> = [];

  constructor(private options: ZevaDBOptions<TSchemas>) {
    this.path = options.path;
    this.schemas = options.schemas;
    this.data = structuredClone(options.initial);
  }

  addMigration(name: string, migration: Migration<TSchemas>) {
    this.migrations.push({ name, migrate: migration });
  }

  async read() {
    let fileData: ZevaDBFile<TSchemas>;

    try {
      const content = await fs.readFile(this.path, "utf-8");

      fileData = JSON.parse(content);
    } catch (error) {
      console.error(`[ZevaDB] Failed to read or parse DB file:`, error.message);
      console.warn(`[ZevaDB] Reinitializing DB to default state.`);

      await this.write();

      return;
    }

    /**
     * Validate the file structure:
     */

    const DBFileSchema = z.object({
      _version: z.number(),
      data: z.object(
        Object.fromEntries(
          Object.entries(this.schemas).map(([key, schema]) => [key, schema])
        )
      ),
    });

    try {
      DBFileSchema.parse(fileData);
    } catch (error) {
      console.error("[ZevaDB] DB file is invalid or corrupted:", error);

      await this.backup();

      console.warn("[ZevaDB] Reinitializing DB to default state.");

      await this.write();

      return;
    }

    /**
     * Apply pending migrations:
     */

    while (fileData._version < this.migrations.length) {
      const { name, migrate } = this.migrations[fileData._version];

      console.log(
        `[ZevaDB] Applying migration ${fileData._version + 1}: ${name}`
      );

      const migrated = migrate(fileData.data);

      fileData = {
        data: migrated,
        _version: fileData._version + 1,
      };
    }

    for (const key in this.schemas) {
      this.data[key] = this.schemas[key].parse(fileData.data[key]);
    }

    /**
     * Save after migrations if any were applied:
     */

    if (fileData._version !== this.migrations.length) {
      await this.write();
    }
  }

  private async backup() {
    try {
      const backupPath = `${this.path}.backup-${Date.now()}`;

      await fs.rename(this.path, backupPath);

      console.warn(`[ZevaDB] Original DB backed up to ${backupPath}`);
    } catch (err: any) {
      if (err.code !== "ENOENT") throw err;
    }
  }

  async write() {
    const parsedData = {} as InferSchemaData<TSchemas>;

    for (const key in this.schemas) {
      const schema = this.schemas[key];

      parsedData[key] = schema.parse(this.data[key]);
    }

    const fileData: ZevaDBFile<TSchemas> = {
      _version: this.migrations.length,
      data: parsedData,
    };

    const stringified = JSON.stringify(fileData, null, 2);

    await fs.writeFile(this.path, stringified, "utf-8");
  }

  set<K extends keyof TSchemas>(key: K, newData: z.infer<TSchemas[K]>) {
    const validated = this.schemas[key].parse(newData);

    this.data[key] = validated;
  }
}
