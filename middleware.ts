import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import ROUTES from "./constants/routes";

export async function middleware(req: NextRequest) {
  // Obtén el token de sesión de NextAuth
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const url = req.nextUrl.clone();

  // Rutas públicas que deben ocultarse si el usuario está autenticado
  const hiddenForAuthenticated = [ROUTES.PUBLIC.LOGIN, ROUTES.PUBLIC.REGISTER];

  // Rutas protegidas que requieren autenticación
  const protectedRoutes = Object.values(ROUTES.PROTECTED);

  // Si el usuario está autenticado y accede a una ruta pública, redirige al dashboard
  if (
    token &&
    hiddenForAuthenticated.some((route) => url.pathname.startsWith(route))
  ) {
    url.pathname = ROUTES.PROTECTED.DASHBOARD;
    return NextResponse.redirect(url);
  }

  // Si el usuario no está autenticado y accede a una ruta protegida, redirige al login
  if (
    !token &&
    protectedRoutes.some((route) => url.pathname.startsWith(route))
  ) {
    url.pathname = ROUTES.PUBLIC.LOGIN;
    return NextResponse.redirect(url);
  }

  // Si no se cumplen las condiciones anteriores, permite continuar
  return NextResponse.next();
}

export const config = {
  // Define las rutas donde se aplicará el middleware
  matcher: ["/login", "/register", "/dashboard/:path*", "/dashboard/:path*"],
};
