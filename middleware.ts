import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const accessToken = request.cookies.get("accessToken");
	const isAuthPage = request.nextUrl.pathname === "/login";
	const isProtectedRoute = [
		"/profile",
		"/profile/bookings",
		"/profile/settings",
		"/bookings",
	].some((route) => request.nextUrl.pathname.startsWith(route));

	if (!accessToken && isProtectedRoute) {
		return NextResponse.redirect(new URL("/unauthorized", request.url));
	}

	if (accessToken && isAuthPage) {
		return NextResponse.redirect(new URL("/unauthorized", request.url));
	}

	const response = NextResponse.next();

	// Ensure authorization header is set for API requests
	if (accessToken) {
		response.headers.set("Authorization", `Bearer ${accessToken.value}`);
	}

	return response;
}

export const config = {
	matcher: ["/profile/:path*", "/bookings/:path*", "/login"],
};
