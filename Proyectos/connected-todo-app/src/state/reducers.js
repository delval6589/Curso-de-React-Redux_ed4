import { combineReducers } from "redux";
import lists from "./lists/list-reducer"
// import tasks from "./tasks/tasks-reducer";

export default combineReducers({ lists });