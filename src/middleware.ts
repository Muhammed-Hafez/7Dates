import { NextRequest } from "next/server";

const locales = ["en", "ar"];

// Get the locale from the pathname
function getLocale(request: NextRequest) {
  return "en";
}

export function middleware(request: NextRequest) {
  // Check if the request is for a static asset in the public directory
  if (
    request.nextUrl.pathname.startsWith("/_next/") ||
    request.nextUrl.pathname.startsWith("/images/") ||
    request.nextUrl.pathname.startsWith("/videos/")
  ) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
