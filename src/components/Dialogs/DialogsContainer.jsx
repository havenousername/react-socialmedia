import React from 'react';
import {addTextActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (dialogsObject) => {
    const addMessage = () => {
        dialogsObject.store.dispatch(addTextActionCreator());
    };

    const onInputChange = (newest) => {
        dialogsObject.store.dispatch(updateNewMessageActionCreator(newest));
    };

    return (
        <Dialogs onAddMessage={addMessage} onInputMessage={onInputChange}
                 dialogs={dialogsObject.store.state.messagesPage.dialogsData}
                messages={dialogsObject.store.state.messagesPage.messagesData}
                newMessage={dialogsObject.store.state.messagesPage.newMessageText}/>
    )
};

export default DialogsContainer;