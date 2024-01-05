import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, GET_ME, CHANGE_PASSWORD } from "./actionTypes";
import {
  apiError,

  logoutUserSuccess,
  getMeSuccess,
  getMeError,
  resetLoginFlag,

  changePasswordError,
  changePasswordSuccess,
} from "./actions";

//Include Both Helper File with needed methods
import {
  LoginAPICALL,
  changePasswordURL,
  getLoggedInUser,
  logoutuserAPICALL,
  verifyuserAPICALL,
} from "../../../helpers/fakebackend_helper";

import toast from "react-hot-toast";

//import { useNavigate } from "react-router-dom";



function* loginUser({ payload: { user,  } }) {
  try {
    const response = yield call(LoginAPICALL, user);

    if (response?.data?.status === 1 && response) {
      try {
        const verify = yield call(verifyuserAPICALL);

        yield put(getMeSuccess(verify?.data?.data));

        window.location.href = "/general-dashboard";
        yield put(resetLoginFlag());
      } catch (error) {
        yield put(getMeError(error.verify?.data?.message));
        toast.error(`${error.verify.data.message}`, {
          autoClose: 3000,
        });
        yield put(resetLoginFlag());
      }
      //yield put(loginSuccess(response?.data?.message));
    } else if (response && response?.status === 0) {
      console.log("orr zero");
      yield put(apiError(response?.data?.message));
      toast.error(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(resetLoginFlag());
    } else {
      console.log("or failed");
      yield put(apiError(response?.data?.message));
      toast.error(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(resetLoginFlag());
    }
  } catch (error) {
    console.log("nad request");
    yield put(apiError(error.response.data.message));
    toast.error(`${error.response.data.message}`, {
      autoClose: 3000,
    });
    yield put(resetLoginFlag());
  }
}
function* getLoggedUserSaga() {
  try {
    const response = yield call(getLoggedInUser);
    yield put(getMeSuccess(response?.data?.data));
  } catch (error) {
    yield put(getMeError(error.response?.data?.message));
    // toast.error(`${error.response.data.message}`, {
    //   autoClose: 3000,
    // });
  }
}

function* logoutUser() {
  try {
    const response = yield call(logoutuserAPICALL);
    yield put(logoutUserSuccess(response?.data?.data));
    window.location.href = "/welcome";
  } catch (error) {
    yield put(getMeError(error.response?.data?.message));
    // toast.error(`${error.response.data.message}`, {
    //   autoClose: 3000,
    // });
  }
}

function* changePass({payload : data}) {
  try {
    const response = yield call(changePasswordURL, data);
   
    if (response && response?.data.status === 1) {
      yield put(changePasswordSuccess(response?.data.data));
      toast.success(`${response?.data.message}`, {
        autoClose: 3000,
      });
      
    } else {
      yield put(changePasswordError(response?.data.data));
      toast.warn(`${response?.data.message}`, {
        autoClose: 3000,
      });
     
    }
  } catch (error) {
    console.log(error);
  
    yield put(changePasswordError(error.response.data.message));
  }
}

function* authSagaCaller() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(GET_ME, getLoggedUserSaga);
  yield takeEvery(LOGOUT_USER, logoutUser);
  yield takeEvery(CHANGE_PASSWORD, changePass);
}

function* authSaga() {
  yield all([fork(authSagaCaller)]);
}

export default authSaga;
