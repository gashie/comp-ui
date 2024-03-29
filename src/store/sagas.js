import { all, fork } from "redux-saga/effects";

import AuthSaga from "./auth/login/saga";

import RegisterSaga from './auth/register/saga'

import RoutesSaga from "./routes/saga";
import RolesSaga from './role/saga'
import PermissionsSaga from './permissions/saga'
import RolesPermissionsSaga from "./rolepermissions/saga";

import UsersSaga from './users/saga'


export default function* rootSaga() {
  yield all([
    //public

    fork(RegisterSaga),
  
    fork(AuthSaga),
    fork(RoutesSaga),
    fork(RolesSaga),
    fork(PermissionsSaga),
    fork(RolesPermissionsSaga),
    fork(UsersSaga)
   
   
  ]);
}
