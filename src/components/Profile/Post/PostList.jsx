import React from "react";
import s from "./PostList.module.css"
import PostItem from "./PostItem";

const PostList = (props) => {
    let items = props.items.map(item => (<PostItem key={ item.id }>{ item.message }</PostItem>))

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value)
    }

    return (
        <div className={ s.item }>
            <h2>My posts</h2>
            <div className={ s.item_new }>
                <input type="text" onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } />
                <button onClick={ addPost }>Add post</button>
            </div>
            { items }
        </div>
    )
}

export default PostList;