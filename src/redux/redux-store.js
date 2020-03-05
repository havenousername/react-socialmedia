import {combineReducers, createStore} from "redux";
import navPageReducer from "./navPage-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage:dialogsReducer,
    navPage:navPageReducer
});

let store = createStore(reducers);

export default store;