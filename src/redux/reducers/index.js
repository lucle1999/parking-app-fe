import { userReducers as user } from "./userReducers";
import { adminReducers as admin } from "./adminReducers";
import { combineReducers } from "redux";

const rootReducer = () => {
      return combineReducers({
            user: user,
            admin: admin,
      });
};

export default rootReducer;
