//REGISTER
let version_one = '/api/v1/comp/'
export const POST_FAKE_REGISTER = "/auth/signup";

//LOGIN
export const POST_FAKE_LOGIN = "/auth/signin";
export const POST_FAKE_JWT_LOGIN = "/post-jwt-login";
export const POST_FAKE_PASSWORD_FORGET = "/auth/forgot-password";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";


//auth
export const LOGIN_URL =`${version_one}/login`;
export const JWT_LOGIN_URL = `${version_one}/auth`;
export const LOGOUT_URL = `${version_one}/logout`;

//creating routes
export const CREATE_ROUTES = `${version_one}/create_routes`;

//roles
export const CREATE_ROLES = `${version_one}/static/system/create_role`;
export const UPDATE_ROLES = `${version_one}/static/system/update_role`;
export const VIEW_ROLES = `${version_one}/static/system/view_role`;
//PERMISSION
export const CREATE_PERMISSION = `${version_one}/static/system/create_permission`;
export const UPDATE_PERMISSION = `${version_one}/static/system/create_permission`;
export const VIEW_PERMISSION = `${version_one}/static/system/view_permission`;
