import React from "react";


const SendMessage = (props) => {

    let newMessage = React.createRef();

    let updateTextMessage = () => {
        props.updateTextMessage(newMessage.current.value)
    }

    return (
        <div>
            <div>
                <textarea ref={newMessage} value={props.state.textMessage} onChange={updateTextMessage} name="" id="" cols="30" rows="5"/>
            </div>
            <div>
                <button onClick={props.sendMessage}>send message</button>
            </div>
        </div>
    )
}

export default SendMessage;
