const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

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
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            break;
        default:
            break;
    }

    return state;
};

export const addPostCreator = () => ({type: ADD_POST});

export const updateNewPostCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, text: text});

export default profileReducer;