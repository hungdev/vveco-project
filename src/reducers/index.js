import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  cartReducer,
  authReducer
});
export default rootReducer;
