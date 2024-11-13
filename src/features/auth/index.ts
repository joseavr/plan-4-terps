import { db } from "@/database"
import {
	account,
	authenticator,
	session,
	user,
	verificationToken
} from "@/database/drizzle/schemas"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"

export const { handlers, auth, signIn, signOut } = NextAuth({
	adapter: DrizzleAdapter(db, {
		usersTable: user,
		accountsTable: account,
		sessionsTable: session,
		authenticatorsTable: authenticator,
		verificationTokensTable: verificationToken
	}),
	providers: []
})
