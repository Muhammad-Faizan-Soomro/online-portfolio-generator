// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req, res) {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const path = req.nextUrl.pathname
  const token = await getToken({ req });

  const isPublicPath = path === '/login' || path === '/register' || path === '/'

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/home', req.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
}

// export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/home",
    "/edit",
    "/template1",
    "/template2",
    "/teamplate3",
    "/template4",
    "/template5",
    "/my-portfolios",
  ],
};
