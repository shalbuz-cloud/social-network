import { sendMessageCreator, updateNewMessageBodyCreator } from "@/redux/messenger-reducer.js";
import Messenger from "@/components/Messenger/Messenger.jsx";
import { connect } from "react-redux";
import { withAuthRedirect } from "@/hoc/withAuthRedirect.jsx";


const mapStateToProps = (state) => {
    return {
        messenger: state.messenger
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    }
};

// High Order Component (HOC)
const AuthRedirectComponent = withAuthRedirect(Messenger);

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MessengerContainer;