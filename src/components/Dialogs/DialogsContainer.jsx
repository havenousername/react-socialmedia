import React from 'react';
import {addTextActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (dialogsObject) => {


    return (
        <StoreContext.Consumer>
        {
            (store) =>{
                let state = store.getState();
                const addMessage = () => {
                    store.dispatch(addTextActionCreator());
                };

                const onInputChange = (newest) => {
                    store.dispatch(updateNewMessageActionCreator(newest));
                };
                debugger;
                return <Dialogs onAddMessage={addMessage} onInputMessage={onInputChange}
                             dialogs={state.messagesPage.dialogsData}
                             messages={state.messagesPage.messagesData}
                             newMessage={state.messagesPage.newMessageText}/>
                }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;