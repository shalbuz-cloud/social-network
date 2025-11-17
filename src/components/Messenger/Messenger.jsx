import React from "react";
import s from "./Messenger.module.css"
import Chat from "./Chat/Chat";
import Message from "./Message/Message";

const Messenger = (props) => {

    let chatItems = props.messenger.dialogs.map(item => <Chat key={ item.id } id={ item.id } username={ item.name } />);
    let messageItems = props.messenger.messages.map(item => <Message key={ item.id }>{ item.message }</Message>);

    let onMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={ s.messenger }>
            <div className={ s.items }>
                { chatItems }
            </div>
            <div className={ s.chat }>
                <div>{ messageItems }</div>
                <div>
                    <div>
                        <textarea
                            value={ props.messenger.newMessageBody }
                            onChange={ onNewMessageChange }
                            placeholder='Enter your message'
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={ onMessageClick }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger;