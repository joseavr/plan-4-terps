import { createId } from "@paralleldrive/cuid2"
import { sql } from "drizzle-orm"
import { sqliteTable, text } from "drizzle-orm/sqlite-core"

export const testTable = sqliteTable("test", {
	id: text()
		.primaryKey()
		.$defaultFn(() => createId()),
	createdAt: text().default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text()
		.default(sql`CURRENT_TIMESTAMP`)
		.$onUpdate(() => sql`CURRENT_TIMESTAMP`)
})
