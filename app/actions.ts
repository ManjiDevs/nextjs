// app/actions.ts
"use server";

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function getUsers() {
  const result = await sql`SELECT * FROM "User";`;
  return result;
}

export async function createUser(name: string, email: string) {
  const result = await sql`
    INSERT INTO "User" (name, email)
    VALUES (${name}, ${email})
    RETURNING *;
  `;
  return result;
}