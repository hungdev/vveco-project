import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import billReducer from "./billReducer";
import addressReducer from "./addressReducer";
import uploadReducer from "./uploadReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  cartReducer,
  authReducer,
  billReducer,
  addressReducer,
  uploadReducer,
  shopReducer
});
export default rootReducer;
