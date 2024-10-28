import { auth } from "@/features/auth"
import type { MiddlewareConfig, NextRequest } from "next/server"

export default auth(async function middleware(req: NextRequest) {
	// Your custom middleware logic goes here
	console.log(req)
})

export const config: MiddlewareConfig = {}
