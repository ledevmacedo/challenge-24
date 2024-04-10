import { isAuthenticated } from "./utils/Auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privateRoutes = [
    "/",
    "/profile",
    "/clients"
]
export default function middleware(req: NextRequest) {
    if (!isAuthenticated && privateRoutes.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL("/signIn", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}