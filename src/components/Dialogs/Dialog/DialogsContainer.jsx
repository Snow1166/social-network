import Dialogs from "../Dialogs";
import {sendMessageAction, updateTextMessageAction} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateTextMessage: (text) => dispatch(updateTextMessageAction(text)),
        onSendMessageClick: () => dispatch(sendMessageAction())
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;
