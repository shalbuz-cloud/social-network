const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profile: {
            posts: [
                {id: 1, message: "Hey, why nobody love me?"},
                {id: 2, message: "It's our new program! Hey!"},
                {id: 3, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis."},
                {id: 4, message: "Lorem ipsum dolor sit amet, consectetur."},
            ],
            newPostText: '',
        },
        messenger: {
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
        },
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    // addPost() {
    //     const postText = this._state.profile.newPostText
    //     if (postText.trim().length === 0) {
    //         return
    //     }
    //     const newPost = {
    //         id: 5,
    //         message: postText,
    //     }
    //     this._state.profile.posts.push(newPost)
    //     this._state.profile.newPostText = ''
    //     this._rerenderEntireTree()
    // },
    // updateNewPostText(text) {
    //     this._state.profile.newPostText = text
    //     this._rerenderEntireTree()
    // },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {  // { type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let postText = this._state.profile.newPostText
            if (postText.trim().length === 0) {
                return
            }
            const newPost = {
                id: 5,
                message: postText,
            }
            this._state.profile.posts.push(newPost);
            this._state.profile.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.text;
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messenger.newMessageBody = action.body;
            this._callSubscriber();
        } else if (action.type === SEND_MESSAGE) {
            if (this._state.messenger.newMessageBody.trim().length === 0) { return }
            let message = {
                id: 4,
                message: this._state.messenger.newMessageBody,
            };
            this._state.messenger.messages.push(message);
            this._state.messenger.newMessageBody = '';
            this._callSubscriber();
        }
    },
}

export const addPostCreator = () => ({type: ADD_POST});

export const updateNewPostCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, text: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default store;
window.store = store; // Для глобального обращения через console