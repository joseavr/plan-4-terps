import { db } from "@/database/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

export const { handlers, auth, signIn, signOut } = NextAuth({
	adapter: PrismaAdapter(db),
	providers: []
})
