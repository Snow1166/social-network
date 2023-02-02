import React from "react";
import Dialogs from "../Dialogs";
import {sendMessageAction, updateTextMessageAction} from "../../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let updateTextMessage = (text) => props.store.dispatch(updateTextMessageAction(text))

    let onSendMessageClick = () => props.store.dispatch(sendMessageAction())

    return (
        <Dialogs dialogsPage={state}
                 updateTextMessage={updateTextMessage}
                 onSendMessageClick={onSendMessageClick}
        />
    )
}

export default DialogsContainer;
