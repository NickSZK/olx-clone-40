import { combineReducers } from "redux"
import { userReducer } from "./reducers/userReduxer"

export default combineReducers({
   user: userReducer
})