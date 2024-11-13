import type { NextRequest } from "next/server"

export function GET(req: NextRequest) {
	console.log("from /api/test")
	return new Response("Hello World")
}
