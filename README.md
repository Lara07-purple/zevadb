# 📦 zevadb - A Safe and Easy JSON Database

<div align="center">
  <a href="https://github.com/Lara07-purple/zevadb/releases">
    <img src="https://img.shields.io/badge/Download%20ZevaDB-v1.0-blue.svg" alt="Download ZevaDB" />
  </a>
</div>

<div align="center">
  <h2>ZevaDB 📦</h2>
  <p>A typesafe JSON file database with Zod schema validation.</p>
  <a href="https://npmjs.com/package/zevadb"><strong>npm</strong></a> | <a href="https://buymeacoffee.com/remvze">Buy Me a Coffee</a>
</div>

### 🛠 Features

- Fully type-safe collections powered by Zod.
- Read/write JSON files with a simple API.
- `db.data` works like a normal object, fully typed.
- Use the `.set()` method for safe collection replacement.
- An easy migration system for updating your database schema.
- Automatic backup of any corrupted files.
- Designed for TypeScript, ensuring full type inference.

### 📥 Installation

To install ZevaDB, you need Node.js and npm. Follow these steps:

1. Open your terminal or command prompt.
2. Run the following command:

    ```bash
    npm install zevadb zod
    ```

> **Note:** ZevaDB requires Zod v4 as a peer dependency.

### 🚀 Getting Started

Follow these steps to start using ZevaDB:

1. Create a new JavaScript or TypeScript file where you want to use the database.
2. Use the following code to set up your database:

    ```ts
    import { z } from "zod";
    import { ZevaDB } from "zevadb";

    // Define schemas
    const UserSchema = z.object({
      id: z.string(),
      name: z.string(),
    });

    const PostSchema = z.object({
      id: z.string(),
      title: z.string(),
      content: z.string(),
      authorId: z.string(),
    });

    // Initialize the database
    const db = new ZevaDB("myDatabase.json", {
      user: UserSchema,
      post: PostSchema,
    });

    // Example: Add a new user
    db.data.user.set({
      id: "1",
      name: "John Doe",
    });

    console.log(db.data.user); // Access the user data
    ```

3. Save your file.
4. Run your file from the terminal or command prompt with Node.js:

    ```bash
    node yourFileName.js
    ```

### 📦 Download & Install

To download ZevaDB, visit the [Releases page](https://github.com/Lara07-purple/zevadb/releases) to find the latest version.

Ensure you follow each step carefully:

1. Go to the [Releases page](https://github.com/Lara07-purple/zevadb/releases).
2. Download the version that suits your needs.
3. Follow the installation instructions provided above.

### 📘 Documentation

For more detailed information about using ZevaDB, you can check the following topics:

- [API Reference](https://github.com/Lara07-purple/zevadb/api)
- [Schema Validation with Zod](https://github.com/Lara07-purple/zevadb/schema)
- [Example Projects](https://github.com/Lara07-purple/zevadb/examples)

### 🛠 System Requirements

To run ZevaDB, you need:

- Node.js version 14 or higher
- npm (Node Package Manager)
- Operating System: Windows, macOS, or Linux

Make sure to keep your system updated for the best performance.

Feel free to reach out if you have any questions or need further assistance.