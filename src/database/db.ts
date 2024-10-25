import { PrismaClient } from "@prisma/client"

// globalThis - a constant that persists across multipe server restarts
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const db = globalForPrisma.prisma || new PrismaClient()

// In development or testing mode, we want to reuse the same connection
// after server restart, so we store it in a global variable (globalForPrisma).
// After server restarts, we will reuse the global connection (line 5).
// In production mode, globalForPrisma will always be `undefined` because
// in this line it's never set.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db

// The database url strings can be uploaded dynamically through
// the env variables for production and development environments
