import React from "react";
import s from "./PostList.module.css"
import PostItem from "./PostItem";

const PostList = () => {
    return (
        <div className={ s.item }>
            <h2>My posts</h2>
            <div className={ s.item_new }>
                <input type="text"/>
                <button>Send</button>
            </div>
            <PostItem>Hey, why nobody love me?</PostItem>
            <PostItem>It's our new program! Hey!</PostItem>
        </div>
    )
}

export default PostList;