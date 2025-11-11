import s from "@/components/Messenger/Messenger.module.css";
import { NavItem } from "@/components/Utils/NavItem.js";
import React from "react";

const Chat = (props) => {
    return (
        <div className={ s.item }>
            <NavItem to={ `/messages/id${ props.id }` } activeClass={ s.active }>{ props.username }</NavItem>
            { props.children }
        </div>
    )
}

export default Chat;