import { NextResponse } from "next/server";

export function middleware(request) {
    // Pega o token/sessão dos cookies
    const token = request.cookies.get("token")?.value;

    // Se não tem token e está tentando acessar /dashboard
    if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
        // Redireciona para login
        return NextResponse.redirect(new URL("/cadastro", request.url));
    }

    return NextResponse.next();
}

// Rotas que o middleware vai proteger
export const config = {
    matcher: ["/dashboard/:path*"],
};