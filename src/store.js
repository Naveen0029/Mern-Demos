import {createStore} from "redux";
import rootReducer1 from "./reducers";

const store = createStore(
    rootReducer1,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store