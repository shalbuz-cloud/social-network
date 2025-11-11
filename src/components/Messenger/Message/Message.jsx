import s from "@/components/Messenger/Messenger.module.css";
import React from "react";

const Message = (props) => <div className={ s.item }>{ props.children }</div>
export default Message;