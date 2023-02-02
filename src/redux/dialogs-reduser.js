const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogReduser = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            state.messages.push({
                id: state.messages.length++,
                message: state.textNewMessage
            })
            state.textNewMessage = ''
            return state
        case UPDATE_TEXT_MESSAGE:
            state.textNewMessage = action.textNewMessage
            return state
        default:
            return state
    }
}

export let sendMessageAction = () => ({type: SEND_MESSAGE})
export let updateTextMessageAction = (text) => ({type: UPDATE_TEXT_MESSAGE, textNewMessage: text})

export default dialogReduser;
