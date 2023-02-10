import Dialogs from "./Dialogs";
import {sendMessageAction, updateTextMessageAction} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textNewMessage: state.dialogsPage.textNewMessage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateTextMessage: (text) => dispatch(updateTextMessageAction(text)),
        onSendMessageClick: () => dispatch(sendMessageAction())
    }
}
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
// // export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
