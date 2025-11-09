import { z } from "zod";

import { ZevaDB } from "../src";

const run = async () => {
  const PostSchema = z.object({
    title: z.string(),
    content: z.string(),
  });

  const UserSchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const db = new ZevaDB({
    path: "db.json",
    schemas: {
      posts: z.array(PostSchema),
      users: z.array(UserSchema),
    },
    initial: {
      posts: [],
      users: [],
    },
  });

  await db.read();
};

run();
