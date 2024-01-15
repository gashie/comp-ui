import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();

// Gets the logged in user data from local session
// export const getLoggedInUser = () => {
//   const user = localStorage.getItem("user");
//   if (user) return JSON.parse(user);
//   return null;
// };
export const getLoggedInUser = () => api.create(url.JWT_LOGIN_URL);

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = (data) =>
  api.create(url.POST_FAKE_REGISTER, data);

// login call---------
export const LoginAPICALL = (reqbody) => api.create(url.LOGIN_URL, reqbody);
// verify user  call
export const verifyuserAPICALL = () => api.create(url.JWT_LOGIN_URL);
export const logoutuserAPICALL = (reqbody) =>
  api.create(url.LOGOUT_URL, reqbody);

export const updateUserProfileURL = (data) =>
  api.create(url.UPDATE_USER_PROFILE, data);

export const changePasswordURL = (data) =>
  api.create(url.CHANGE_PASSWORD, data);

export const addRoutesAPICALL = (data) => api.create(url.CREATE_ROUTES, data);

//roles
export const addrolesPICALL = (data) => api.create(url.CREATE_ROLES, data);
export const updaterolesPICALL = (data) => api.create(url.UPDATE_ROLES, data);
export const getrolesPICALL = (data) => api.create(url.VIEW_ROLES, data);

export const addpermissionsPICALL = (data) => api.create(url.CREATE_PERMISSION, data);
export const updatepermissionsPICALL = (data) => api.create(url.UPDATE_PERMISSION, data);
export const getpermissionsPICALL = (data) => api.create(url.VIEW_PERMISSION, data);


export const createUserAPICALL = (data) => api.create(url.CREATE_USER_URL, data);

//rolestopermission
export const assignRoleToPermissionAPICALL = ( data) => api.create(url.ASSIGN_ROLES_TO_PERMISSION, data);
export const viewRoletoPermissionAPICALL = ( data) => api.create(url.VIEW_ROLES_TO_PERMISSION, data);


export const getusersPICALL = (data) => api.create(url.VIEW_USERS, data);