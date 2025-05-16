import { NextRequest, NextResponse } from "next/server";

const adminOnlyRoutes = [
  "/cadastroadmin",
  "/cadastrodemedico",
  "/cadastrodeunidade",
  "/cadastroespecialidade",
  "/cadastrodisponibilidade",
];

const userOnlyRoutes = ["/agendamentomarcado"];

const bothRolesRoutes = [
  "/dashboard",
  "/relatorios",
  "/consultadisponibilidade",
];

// 🔓 Rotas públicas temporárias (sem necessidade de login)
const publicRoutes = ["/login", "/cadastrodeusuario"];

function decodeJwt(token: string) {
  try {
    const base64 = token.split(".")[1];
    const payload = atob(base64);
    return JSON.parse(payload);
  } catch (err) {
    console.error("Erro ao decodificar JWT:", err);
    return null;
  }
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Ignora assets e arquivos públicos
  if (
    path.startsWith("/_next") ||
    path.startsWith("/favicon.ico") ||
    path.startsWith("/logo.svg") ||
    path.startsWith("/manifest.json")
  ) {
    return NextResponse.next();
  }

  // Libera rotas públicas SEM exigir token
  if (publicRoutes.includes(path)) {
    return NextResponse.next();
  }

  const token =
    request.cookies.get("token")?.value || request.headers.get("authorization");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const decoded: any = decodeJwt(token.replace("Bearer ", ""));
  console.log("Token decodificado no middleware:", decoded);

  if (!decoded || !decoded.role) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const userRole = decoded.role;

  // Rotas permitidas para ambos
  if (bothRolesRoutes.includes(path)) {
    return NextResponse.next();
  }

  // Apenas admins
  if (adminOnlyRoutes.includes(path) && userRole !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Apenas usuários comuns
  if (userOnlyRoutes.includes(path) && userRole !== "usuario") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/cadastroadmin",
    "/cadastrodemedico",
    "/cadastrodeunidade",
    "/cadastroespecialidade",
    "/cadastrodisponibilidade",
    "/consultadisponibilidade",
    "/agendamentomarcado",
    "/relatorios",
  ],
};

// import { NextRequest, NextResponse } from "next/server";

// const adminOnlyRoutes = [
//   "/cadastroadmin",
//   "/cadastrodemedico",
//   "/cadastrodeunidade",
//   "/cadastroespecialidade",
//   "/cadastrodisponibilidade",
// ];
// const userOnlyRoutes = ["/consultadisponibilidade", "/agendamentomarcado"];
// const bothRolesRoutes = ["/dashboard", "/relatorios"];

// // 🔓 Rotas públicas temporárias (sem necessidade de login)
// const publicRoutes = ["/login", "/cadastrodeusuario"];

// function decodeJwt(token: string) {
//   try {
//     const base64 = token.split(".")[1];
//     const payload = atob(base64);
//     return JSON.parse(payload);
//   } catch (err) {
//     console.error("Erro ao decodificar JWT:", err);
//     return null;
//   }
// }

// export function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;

//   // Libera rotas públicas SEM exigir token
//   if (publicRoutes.includes(path)) {
//     return NextResponse.next();
//   }

//   const token =
//     request.cookies.get("token")?.value || request.headers.get("authorization");

//   if (!token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   const decoded: any = decodeJwt(token.replace("Bearer ", ""));
//   console.log("Token decodificado no middleware:", decoded);
//   if (!decoded || !decoded.role) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   const userRole = decoded.role;

//   if (adminOnlyRoutes.includes(path) && userRole !== "admin") {
//     return NextResponse.redirect(new URL("/unauthorized", request.url));
//   }

//   if (userOnlyRoutes.includes(path) && userRole !== "usuario") {
//     return NextResponse.redirect(new URL("/unauthorized", request.url));
//   }

//   return NextResponse.next();
// }

// // ✅ Aplique o middleware apenas nas rotas protegidas
// export const config = {
//   matcher: [
//     "/dashboard",
//     "/cadastroadmin",
//     "/cadastrodemedico",
//     "/cadastrodeunidade",
//     "/cadastroespecialidade",
//     "/cadastrodisponibilidade",
//     "/consultadisponibilidade",
//     "/agendamentomarcado",
//     "/relatorios",
//   ],
// };
