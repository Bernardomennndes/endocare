/**
 * An array de rotas para acesso público
 * Estas rotas não requerem autentificação
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/new-verification"
];


/**
 * An array de rotas para acesso com autenticação
 * Estas rotas requerem autentificação
 * @type {string[]}
 */
export const authRoutes = [
    "/login",
    "/register",
    "/error",
    "/reset",
    "/new-password"
];

/**
 * Prefixo para API de autentificação
 * estas rotas inicião com o prefixo de api
 * @type {string[]}
 */
export const  apiAuthPrefix = "/api/auth";

/**
 * Default redirect depois do login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/home";