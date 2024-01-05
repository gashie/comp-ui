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
