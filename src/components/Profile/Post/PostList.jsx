import React from "react";
import s from "./PostList.module.css";
import PostItem from "./PostItem";
import { addPostCreator, updateNewPostCreator } from "@/redux/profile-reducer.js";

const PostList = (props) => {
    let items = props.profile.posts.map(item => (<PostItem key={ item.id }>{ item.message }</PostItem>))

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostCreator())
    }

    const onPostChange = () => {
        props.dispatch(updateNewPostCreator(newPostElement.current.value))
    }

    return (
        <div className={ s.item }>
            <h2>My posts</h2>
            <div className={ s.item_new }>
                <input type="text" onChange={ onPostChange } ref={ newPostElement }
                       value={ props.profile.newPostText } />
                <button onClick={ addPost }>Add post</button>
            </div>
            { items }
        </div>
    )
}

export default PostList;