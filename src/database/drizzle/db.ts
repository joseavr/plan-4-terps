import * as schema from "@/database/drizzle/schemas"
import { createClient } from "@libsql/client"
import { drizzle } from "drizzle-orm/libsql"

// This creates a client connection to the database
// that works only with serverless functions (node.js runtime)
// use case: all route.ts, by default, runs in node.js runtime
const client = createClient({
	url: process.env.DATABASE_URL as string,
	authToken: process.env.DATABASE_AUTH_TOKEN as string
})
export const db = drizzle({ client, schema })
