import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navPageReducer from "./navPage-reducer";



let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    navPage:navPageReducer
});

let store = createStore(reducers);

window.store = store;

export default store;