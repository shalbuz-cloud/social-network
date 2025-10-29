import React from "react";
import s from "./PostItem.module.css"

const PostItem = (props) => {
    return (
        <div className={ s.item }>
            <div className={ s.avatar }><img src="https://placehold.co/52x52/orange/white.png" alt=""/></div>
            <p>{ props.children }</p>
        </div>
    )
}

export default PostItem;