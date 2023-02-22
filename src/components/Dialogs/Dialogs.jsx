import style from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./Dialog/DialogItem";
import React from "react";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {ControlInputText} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLengthMessage100 = maxLengthCreator(100)
const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name={'newMessageBody'} component={ControlInputText} tag={'textarea'} placeholder={'Введите текст сообщения'} validate={[required, maxLengthMessage100] } type={<textarea name="" id="" cols="30" rows="10"></textarea>}/>
        <button >send message</button>
    </form>
}


const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    let messagesElement = props.messages.map(el => <Message key={el.id} message={el.message}/>)

    const addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)
    }

    if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.items}>
                    {dialogsElement}
                </div>
            </div>
            <div>
                <div className={style.messages}>
                    {messagesElement}
                </div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
