import { profileAPI, usersAPI } from "@/api/api.js";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
    posts: [
        {id: 1, message: "Hey, why nobody love me?"},
        {id: 2, message: "It's our new program! Hey!"},
        {id: 3, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis."},
        {id: 4, message: "Lorem ipsum dolor sit amet, consectetur."},
    ],
    newPostText: '',
    profile: null,
    status: ''
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
        case SET_USER_PROFILE:
            stateCopy.profile = action.profile;
            break;
        case SET_STATUS:
            stateCopy.status = action.status;
            break;
        default:
            break;
    }

    return stateCopy;
};

export const addPostCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data.status));
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.success) {
                dispatch(setStatus(response.data.status));
            }
        })
}

export default profileReducer;