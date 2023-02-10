import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./Dialog/DialogItem";
import React from "react";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    let messagesElement = props.messages.map(el => <Message key={el.id} message={el.message}/>)

    let newMessage = React.createRef();

    let updateTextMessage = () => props.updateTextMessage(newMessage.current.value)

    let onSendMessageClick = () => props.onSendMessageClick()

    if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.items}>
                    {dialogsElement}
                </div>
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElement}
                </div>
                <div>
                    <div>
                        <textarea ref={newMessage} value={props.textNewMessage} onChange={updateTextMessage} placeholder={'Enter your massage'} name="" id="" cols="30" rows="5"/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
