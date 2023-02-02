const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Lex'},
        {id: 2, name: 'SuperMan'},
        {id: 3, name: 'BatMent'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Captain'},
        {id: 6, name: 'SuperMent'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Holla'},
        {id: 3, message: 'Hallo'},
    ],
    textNewMessage: '',
}
const dialogReducer = (state = initialState, action) => {
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

export default dialogReducer;
