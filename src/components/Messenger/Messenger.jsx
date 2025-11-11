import React from "react";
import s from "./Messenger.module.css"
import Chat from "./Chat/Chat";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "@/redux/messenger-reducer.js";

const Messenger = (props) => {

    let chatItems = props.state.dialogs.map(item => <Chat key={ item.id } id={ item.id } username={ item.name } />);
    let messageItems = props.state.messages.map(item => <Message key={ item.id }>{ item.message }</Message>);
    let newMessageBody = props.state.newMessageBody;

    let onMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
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
                            value={ newMessageBody }
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