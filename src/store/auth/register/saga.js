import { takeEvery, fork, put, all, call } from "redux-saga/effects";

//Account Redux states
import { REGISTER_USER, UPDATE_PROILE } from "./actionTypes";
import {
  registerUserSuccessful,
  registerUserFailed,
  resetRegisterFlag,
  updateUserProfileSuccess,
  updateUserProfileError,
} from "./actions";

import { createUserAPICALL } from "../../../helpers/fakebackend_helper";

// initialize relavant method of both Auth


import toast from 'react-hot-toast'


// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user, history } }) {
  try {
 
    const response = yield call(createUserAPICALL, user);
    if (response.data.status === 1 && response) {
      yield put(registerUserSuccessful(response.data.data));
      yield put(resetRegisterFlag());
      
      toast.success(`${response?.data.message}`, {
        autoClose: 3000,
      });
      window.location.href = '/signin';
    } else {
      yield put(registerUserFailed(response.data.data));
      toast.error(`${response?.data.message}`, {
        autoClose: 3000,
      });
      yield put(resetRegisterFlag());
    }
  } catch (error) {
    yield put(registerUserFailed(error.response.data.message));
    toast.error(`${error.response.data.message}`, {
      autoClose: 3000,
    });
    yield put(resetRegisterFlag());
    
  }
}

// function* updateProfile({ payload: data }) {
//   try {
//     const response = yield call(updateUserAPICALL, data);

//     if (response && response?.data.status === 1) {
//       //  yield put(updateRatecardURL());
//       yield put(updateUserProfileSuccess());
//       // yield put(rateCardAction({ viewAction: "" }));
//       toast.success(`Profile Updated Succesfully`, {
//         autoClose: 6000,
//       });
//     } else {
//       yield put(updateUserProfileError(response));
//       toast.warn(`${response?.data.message}`, {
//         autoClose: 3000,
//       });
//       // yield put(rateCardAction({ viewAction: "" }));
//     }
//   } catch (error) {
//     console.log(error);
//     yield put(updateUserProfileError(error));
//     // yield put(rateCardAction({ viewAction: "" }));
//   }
// }

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
  // yield takeEvery(UPDATE_PROILE, updateProfile);
}

function* accountSaga() {
  yield all([fork(watchUserRegister)]);
}

export default accountSaga;
