import {
  REGISTER_USER,
  REGISTER_USER_SUCCESSFUL,
  REGISTER_USER_FAILED,
  RESET_REGISTER_FLAG,
  UPDATE_PROILE,
  UPDATE_PROILE_SUCCESS,
  UPDATE_PROILE_ERROR
} from "./actionTypes"

export const registerUser = (user, history) => {
  return {
    type: REGISTER_USER,
    payload: { user, history },
  }
}

export const registerUserSuccessful = user => {
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload: user,
  }
}

export const registerUserFailed = user => {
  return {
    type: REGISTER_USER_FAILED,
    payload: user,
  }
}

export const resetRegisterFlag = () => {
  return {
    type: RESET_REGISTER_FLAG,
  }
}

export const updateUserProfile = (data) => {
  return {
    type: UPDATE_PROILE,
    payload: data,
  };
};
export const updateUserProfileSuccess = () => {
  return {
    type: UPDATE_PROILE_SUCCESS,
  };
};
export const updateUserProfileError = (data) => {
  return {
    type: UPDATE_PROILE_ERROR,
    payload: data,
  };
};

