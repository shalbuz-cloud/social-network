const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: "Eleonora"},
        {id: 2, name: "Mark"},
        {id: 3, name: "John"},
        {id: 4, name: "Elliot"},
        {id: 5, name: "Ann"},
        {id: 6, name: "Steven"},
    ],
    messages: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sit."
        },
        {
            id: 2,
            message: "Lorem ipsum dolor."
        },
        {
            id: 3,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, consequatur corporis " +
                "debitis dolor dolorem dolorum fugit iure labore, nostrum obcaecati optio perferendis quam quasi, " +
                "qui quis sint. Iste, quaerat."
        },
    ],
    newMessageBody: '',
}

const messengerReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            if (state.newMessageBody.trim().length === 0) {
                break;
            }
            let message = {
                id: 4,
                message: stateCopy.newMessageBody,
            };
            stateCopy.messages = [...state.messages, message];
            stateCopy.newMessageBody = '';
            break;
        default:
            break;
    }

    return stateCopy;
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default messengerReducer;