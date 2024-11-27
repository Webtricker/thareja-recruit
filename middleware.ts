import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// List of public routes
const PUBLIC_ROUTES = ["/job-post-save", "/", "/sign-in", "/sign-up"]; 

export function middleware(request: NextRequest) {
  const token = false; // Replace this with real token-checking logic (e.g., cookie or session)
  const { pathname } = request.nextUrl;

  // Normalize pathname to handle trailing slashes and better match routes
  const normalizedPathname = pathname.replace(/\/$/, "");
  console.log("Normalized Pathname:", normalizedPathname);

  // Handle static files and Next.js internals (e.g., _next, static assets, API routes)
  if (
    pathname.startsWith("/_next/") || // Next.js internal files (JS, CSS, etc.)
    pathname.startsWith("/api/") || // API routes
    pathname.startsWith("/static/") || // Static files (e.g., images, fonts)
    pathname.endsWith(".ico") || // Favicon
    pathname.endsWith(".css") || // CSS files
    pathname.endsWith(".js") || // JavaScript files
    pathname.endsWith(".svg") // SVG files (if stored in /public or other directories)
  ) {
    console.log("Allowed: Static or internal asset.");
    return NextResponse.next();
  }

  // Check if the route is public (accessible without authentication)
  const isPublicRoute = PUBLIC_ROUTES.some((route) => normalizedPathname === route);
  if (isPublicRoute) {
    console.log(`Allowed: Public route (${normalizedPathname}).`);
    return NextResponse.next();
  }

  // Redirect to sign-in if not authenticated
  if (!token) {
    console.log("Redirecting to /sign-in due to missing token.");
    const loginUrl = new URL("/", request.url);
    loginUrl.searchParams.set("redirect", pathname); // Optional: Preserve the redirect
    return NextResponse.redirect(loginUrl);
  }

  // Allow authenticated requests
  console.log("Allowed: Authenticated user.");
  return NextResponse.next();
}

// Match all routes except static files, API, and Next.js internals
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|svgs).*)", // Exclude static, images, and internal assets
  ],
};
