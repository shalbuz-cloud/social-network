import { sendMessageCreator, updateNewMessageBodyCreator } from "@/redux/messenger-reducer.js";
import Messenger from "@/components/Messenger/Messenger.jsx";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        messenger: state.messenger,
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

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerContainer;