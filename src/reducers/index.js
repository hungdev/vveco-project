import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import billReducer from "./billReducer";

const rootReducer = combineReducers({
  cartReducer,
  authReducer,
  billReducer
});
export default rootReducer;
