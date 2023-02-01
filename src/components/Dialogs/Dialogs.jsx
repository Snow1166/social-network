import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./Dialog/DialogItem";
import SendMessage from "./SendMessage";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsPage.dialogs.map(el => <DialogItem id={el.id} name={el.name}/>)
    let messagesElement = props.state.dialogsPage.messages.map(el => <Message message={el.message}/>)

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
                    <SendMessage dispatch={props.dispatch} state={props.state}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
