import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./Dialog/DialogItem";
import SendMessage from "./SendMessage";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsPage.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
    let messagesElement = props.state.dialogsPage.messages.map(el => <Message message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.items}>
                    {dialogsElement}
                </div>
            </div>
            <div className={s.messages}>
                <SendMessage sendMessage={props.sendMessage}
                             updateTextMessage={props.updateTextMessage}
                             state={props.state}
                />
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;
