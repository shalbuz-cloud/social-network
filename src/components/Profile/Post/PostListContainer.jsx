import { addPostCreator, updateNewPostCreator } from "@/redux/profile-reducer.js";
import PostList from "./PostList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
        return {
            posts: state.profile.posts,
            newPostText: state.profile.newPostText,
        }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updateNewPostText: (text) => {
            let action = updateNewPostCreator(text)
            dispatch(action)
        },
    }
};

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList);

export default PostListContainer;