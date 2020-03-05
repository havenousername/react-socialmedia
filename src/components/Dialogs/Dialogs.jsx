import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/DialogItem";
import Message from "./Message/MessageItem";
import {addTextActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (dialogsObject) => {
    let messagesDataMap = dialogsObject.dialog.messagesData.map( (ms) => {
        return <Message key={ms.id} message={ms.message} image={ms.image} name={ms.name}/>
    });
    let dialogsDataMap = dialogsObject.dialog.dialogsData.map(dl =>  <Dialog key={dl.id} name={dl.name}/>);

    let newMessageElement = React.createRef();

    const addMessage = () => {
        dialogsObject.dispatch(addTextActionCreator());
    };

    const onInputChange = () => {
        console.log(newMessageElement.current.value);
        let newest = newMessageElement.current.value;
        debugger;
        dialogsObject.dispatch(updateNewMessageActionCreator(newest));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.pageDialogs}>
                <div className={s.items}>
                    {dialogsDataMap}
                </div>
                <div className={s.messages}>
                    {messagesDataMap}
                    <div className={s.input}>
                        <textarea ref={newMessageElement}  onChange={onInputChange} value={dialogsObject.dialog.newMessageText}/>
                        <button className={s.enter} onClick={addMessage}>Enter</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;