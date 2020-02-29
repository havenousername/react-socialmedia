import React from 'react';
import s from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <div className={s.block}>
            <div className={s.text}>
                <div className={s.names}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
            </div>
            <div className={s.divimg}>
                <img className={s.image} src={props.image} alt={'avatar'}/>
            </div>
        </div>
    )
};

export default MessageItem;