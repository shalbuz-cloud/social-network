import React from "react";
import cl from "./PostItem.module.css"

const PostItem = () => {
    return (
        <div className={ cl.item }>
            <div className={ cl.avatar }><img src="https://placehold.co/52x52/orange/white.png" alt=""/></div>
            <p>Hey, why nobody love me?</p>
        </div>
    )
}

export default PostItem;