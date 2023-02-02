import React from "react";
import {sendMessageAction, updateTextMessageAction} from '../../redux/dialogs-reduser'

const SendMessage = (props) => {

    let newMessage = React.createRef();

    let updateTextMessage = () => {
        props.dispatch(updateTextMessageAction(newMessage.current.value))
    }

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAction())
    }
    return (
        <div>
            <div>
                <textarea ref={newMessage} value={props.state.dialogsPage.textNewMessage} onChange={updateTextMessage} placeholder={'Enter your massage'} name="" id="" cols="30" rows="5"/>
            </div>
            <div>
                <button onClick={onSendMessageClick}>send message</button>
            </div>
        </div>
    )
}

export default SendMessage;
