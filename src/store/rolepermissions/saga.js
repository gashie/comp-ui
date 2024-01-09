import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import toast from "react-hot-toast";

// Ecoomerce Redux States
import {
GET_ROLES_PERMISSIONS_REQUEST,
UPDATE_ROLES_PERMISSIONS,
ADD_ROLES_PERMISSIONS_REQUEST
} from "./actionType";

import {
getRolesPermissionsActionResponseError,
getRolesPermissionsActionResponseSuccess,
updateRolesPermissionsFail,
updateRolesPermissionsSuccess,
addRolesPermissionsFail,
addRolesPermissionsSuccess,
getRolesPermissionsAction
} from "./action";

//Include Both Helper File with needed methods
import {
 getRolesPermissionsPICALL,
 addRolesPermissionsPICALL,
 updateRolesPermissionsPICALL
} from "../../helpers/fakebackend_helper";

function* getRolesPermissions() {
  try {
    const response = yield call(getRolesPermissionsPICALL);
    if (response && response?.data?.status === 1) {
      yield put(getRolesPermissionsActionResponseSuccess(response?.data?.data));
    }else{
      yield put(getRolesPermissionsActionResponseError(response?.data?.message));
    }
  } catch (error) {
    yield put(getRolesPermissionsActionResponseError(error));
  }
}


function* addRolesPermissions({ payload: reqbody }) {
  try {
    const response = yield call(addRolesPermissionsPICALL, reqbody);
    if (response && response?.data?.status === 1) {
      yield put(addRolesPermissionsSuccess(response));
      yield put(getRolesPermissionsAction())
      toast.success("Saved Successfully", { autoClose: 3000 });
    }else{
      yield put(addRolesPermissionsFail(response?.data?.message));
      yield put(getRolesPermissionsAction())
      toast.error(response?.data?.message, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(addRolesPermissionsFail(error)); yield put(getRolesPermissionsAction())
    toast.error("Failed to save record", { autoClose: 3000 });
  }
}

function* updateRolesPermissions({ payload: reqbody }) {
  try {
    const response = yield call(updateRolesPermissionsPICALL, reqbody);
    if (response && response?.data?.status === 1) {
      yield put(updateRolesPermissionsSuccess(response?.data?.data));
      yield put(getRolesPermissionsAction())
      toast.success("Updateded Successfully", { autoClose: 3000 });
    }else{
      yield put(updateRolesPermissionsFail(response?.data?.message));
      yield put(getRolesPermissionsAction())
      toast.error(response?.data?.message, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(updateRolesPermissionsFail(error));
    yield put(getRolesPermissionsAction())
    toast.error("Failed to update record", { autoClose: 3000 });
  }
}



export function* watchGetRolesPermissions() {
  yield takeEvery(GET_ROLES_PERMISSIONS_REQUEST, getRolesPermissions);
}


export function* watchUpdateRolesPermissions() {
  yield takeEvery(UPDATE_ROLES_PERMISSIONS, updateRolesPermissions);
}

export function* watchAddNewRolesPermissions() {
  yield takeEvery(ADD_ROLES_PERMISSIONS_REQUEST, addRolesPermissions);
}

function* rolesPermissionsSaga() {
  yield all([
    fork(watchGetRolesPermissions),
    fork(watchUpdateRolesPermissions),
    fork(watchAddNewRolesPermissions),
  ]);
}

export default rolesPermissionsSaga;
