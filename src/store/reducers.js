import { combineReducers } from "redux";

import Login from "./auth/login/reducer";

import menuReducer from "./defaultStates/reducers/menuReducer";
import themeReducer from "./defaultStates/reducers/themeReducer";
import layoutReducer from "./defaultStates/reducers/layoutReducer";
import strokeReducer from "./defaultStates/reducers/strokeReducer";
import borderLayoutReducer from "./defaultStates/reducers/borderLayoutReducer";
import {
  borderRadiusReducer,
  boxLayoutReducer,
  iconColorReducer,
  monochromeReducer,
  screenWidthReducer,
  themeModeReducer,
} from "./defaultStates/reducers/moreSettingsReducer";

const rootReducer = combineReducers({
  // public

  Login,
  menu: menuReducer,
  theme: themeReducer,
  layout: layoutReducer,
  stroke: strokeReducer,
  borderLayout: borderLayoutReducer,
  boxLayout: boxLayoutReducer,
  monochrome: monochromeReducer,
  borderRadius: borderRadiusReducer,
  iconColor: iconColorReducer,
  themeMode: themeModeReducer,
  screenWidth: screenWidthReducer,
});

export default rootReducer;