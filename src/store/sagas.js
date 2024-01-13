import { all, fork } from "redux-saga/effects";

import AuthSaga from "./auth/login/saga";
import RoutesSaga from "./routes/saga";
import RolesSaga from './role/saga'
import PermissionsSaga from './permissions/saga'


export default function* rootSaga() {
  yield all([
    //public
  
    fork(AuthSaga),
    fork(RoutesSaga),
    fork(RolesSaga),
    fork(PermissionsSaga),
   
   
  ]);
}
