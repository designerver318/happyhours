import { NextResponse } from "next/server";

export function middleware(request) {
  const isAuthenticated = request.cookies.get("admin-auth")?.value === "true";

  if (!isAuthenticated && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}