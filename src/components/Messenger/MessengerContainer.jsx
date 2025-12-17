import { sendMessageCreator, updateNewMessageBodyCreator } from "@/redux/messenger-reducer.js";
import Messenger from "@/components/Messenger/Messenger.jsx";
import { connect } from "react-redux";
import { withAuthRedirect } from "@/hoc/withAuthRedirect.jsx";
import { compose } from "@reduxjs/toolkit";


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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messenger);