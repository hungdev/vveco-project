import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import billReducer from "./billReducer";
import addressReducer from "./addressReducer";

const rootReducer = combineReducers({
  cartReducer,
  authReducer,
  billReducer,
  addressReducer
});
export default rootReducer;
