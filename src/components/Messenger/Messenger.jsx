import React from "react";
import s from "./Messenger.module.css"
import Chat from "./Chat/Chat";
import Message from "./Message/Message";

const Messenger = (props) => {
    return (
        <div className={ s.messenger }>
            <div className={ s.items }>
                {
                    props.dialogs.map(item => (
                        <Chat key={ item.id } id={ item.id } username={ item.name } />
                    ))
                }
            </div>
            <div className={ s.chat }>
                {
                    props.messages.map(item => (
                        <Message key={ item.id }>{ item.message }</Message>
                    ))
                }
            </div>
        </div>
    )
}

export default Messenger;