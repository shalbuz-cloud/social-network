const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, message: "Hey, why nobody love me?"},
        {id: 2, message: "It's our new program! Hey!"},
        {id: 3, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis."},
        {id: 4, message: "Lorem ipsum dolor sit amet, consectetur."},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch (action.type) {
        case ADD_POST:
            let postText = state.newPostText
            if (postText.trim().length === 0) {
                break;
            }
            const newPost = {
                id: 5,
                message: postText,
            }

            stateCopy.posts = [...state.posts, newPost];
            stateCopy.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.text;
            break;
        default:
            break;
    }

    return stateCopy;
};

export const addPostCreator = () => ({type: ADD_POST});

export const updateNewPostCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, text: text});

export default profileReducer;