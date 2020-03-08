import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/DialogItem";
import Message from "./Message/MessageItem";


const Dialogs = (dialogsObject) => {
    let messagesDataMap = dialogsObject.messages.map( (ms) => {
        return <Message key={ms.id} message={ms.message} image={ms.image} name={ms.name}/>
    });
    let dialogsDataMap = dialogsObject.dialogs.map(dl =>  <Dialog key={dl.id} name={dl.name}/>);

    let newMessageElement = React.createRef();

    const addMessage = () => {
        dialogsObject.onAddMessage();
    };

    const onInputChange = () => {
        let newest = newMessageElement.current.value;
        dialogsObject.onInputMessage(newest);
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
                        <textarea ref={newMessageElement} className={s.text} onChange={onInputChange} value={dialogsObject.newMessage}/>
                        <button className={s.enter} onClick={addMessage}>Enter</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;