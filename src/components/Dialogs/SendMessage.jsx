import React from "react";
import {sendMessageActionCreator, updateTextMessageActionCreator} from '../../redux/state'

const SendMessage = (props) => {

    let newMessage = React.createRef();

    let updateTextMessage = () => {
        props.dispatch(updateTextMessageActionCreator(newMessage.current.value))
    }

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }
    return (
        <div>
            <div>
                <textarea ref={newMessage} value={props.state.textMessage} onChange={updateTextMessage} placeholder={'Enter your massage'} name="" id="" cols="30" rows="5"/>
            </div>
            <div>
                <button onClick={onSendMessageClick}>send message</button>
            </div>
        </div>
    )
}

export default SendMessage;
