import changeTheNumber from "./upDown";
import changeIt from "./IncDec";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    changeIt,
   
})

export default rootReducer