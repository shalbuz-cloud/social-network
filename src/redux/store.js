import profileReducer from "@/redux/profile-reducer.js";
import messengerReducer from "@/redux/messenger-reducer.js";
import sidebarReducer from "@/redux/sidebar-reducer.js";

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
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        // Если были изменения, вернется новый state, иначе останется без изменений
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messenger = messengerReducer(this._state.messenger, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    },
}

export default store;
window.store = store; // Для глобального обращения через console