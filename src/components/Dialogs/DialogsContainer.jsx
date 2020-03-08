import React from 'react';
import {addTextActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogsData,
        messages: state.messagesPage.messagesData,
        newMessage: state.messagesPage.newMessageText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addTextActionCreator())
        },
        onInputMessage: (newest)=> {
            dispatch(updateNewMessageActionCreator(newest))
        }
    };
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;