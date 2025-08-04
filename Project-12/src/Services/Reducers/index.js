import { combineReducers } from "redux";
import movieReducer from '../Reducers/movieReducers';
import useReducer  from "../Reducers/userReducer";

export const rootReducer = combineReducers({
    movieReducer,
    useReducer,
})