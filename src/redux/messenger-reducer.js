const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const messengerReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            if (state.newMessageBody.trim().length === 0) {
                break;
            }
            let message = {
                id: 4,
                message: state.newMessageBody,
            };
            state.messages.push(message);
            state.newMessageBody = '';
            break;
        default:
            break;
    }

    return state;
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default messengerReducer;