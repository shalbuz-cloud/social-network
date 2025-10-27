import React from "react";
import cl from "./PostList.module.css"
import PostItem from "./PostItem";

const PostList = () => {
    return (
        <div className={ cl.item }>
            <h2>My posts</h2>
            <div className={ cl.item_new }>
                <input type="text"/>
                <button>Send</button>
            </div>
            <PostItem>Hey, why nobody love me?</PostItem>
            <PostItem>It's our new program! Hey!</PostItem>
        </div>
    )
}

export default PostList;