(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__8d2a59a5._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/constants/routes.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const ROUTES = {
    PUBLIC: {
        LOGIN: "/login",
        REGISTER: "/register",
        HOME: "/",
        HELP: "/help"
    },
    PROTECTED: {
        DASHBOARD: "/dashboard"
    }
};
const __TURBOPACK__default__export__ = ROUTES;
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/jwt/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$routes$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/routes.js [middleware-edge] (ecmascript)");
;
;
;
async function middleware(req) {
    // Obtén el token de sesión de NextAuth
    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getToken"])({
        req,
        secret: process.env.NEXTAUTH_SECRET
    });
    const url = req.nextUrl.clone();
    // Rutas públicas que deben ocultarse si el usuario está autenticado
    const hiddenForAuthenticated = [
        __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$routes$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].PUBLIC.LOGIN,
        __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$routes$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].PUBLIC.REGISTER
    ];
    // Rutas protegidas que requieren autenticación
    const protectedRoutes = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$routes$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].PROTECTED);
    // Si el usuario está autenticado y accede a una ruta pública, redirige al dashboard
    if (token && hiddenForAuthenticated.some((route)=>url.pathname.startsWith(route))) {
        url.pathname = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$routes$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].PROTECTED.DASHBOARD;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
    // Si el usuario no está autenticado y accede a una ruta protegida, redirige al login
    if (!token && protectedRoutes.some((route)=>url.pathname.startsWith(route))) {
        url.pathname = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$routes$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].PUBLIC.LOGIN;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
    // Si no se cumplen las condiciones anteriores, permite continuar
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    // Define las rutas donde se aplicará el middleware
    matcher: [
        "/login",
        "/register",
        "/dashboard/:path*",
        "/dashboard/:path*"
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__8d2a59a5._.js.map