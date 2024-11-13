import { auth } from "@/features/auth"
import { type MiddlewareConfig, NextResponse } from "next/server"

export default auth(async (req) => {
	// logic here

	// edge runtime:
	// - drizzle ✅
	// - nextauth: still need testing when login
	return NextResponse.next()
})

export const config: MiddlewareConfig = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
	]
}
