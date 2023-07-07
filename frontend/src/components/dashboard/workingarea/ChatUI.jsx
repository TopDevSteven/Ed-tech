import React, { useContext, useState } from "react";
import BotMessage from "../../common/BotMessage";
import UserMessage from "../../common/UserMessage";
import { LessonContext } from "../WorkingArea";
import "./ChatUI.css"


const ChatUI = () => {
    const {messageHistory, setMessageHistory} = useContext(LessonContext);
    
    return (
        <div className="messagehistory-container">
            <BotMessage respond="Hello! I am an Ed Tech Professional that is here to help with  your specific needsYou have chosen to search for lessons on:"/>
            {/* <UserMessage /> */}
            {
                messageHistory.map((item) => item.user == 'User'?<UserMessage question={item.text}/> : <BotMessage respond={item.text}/>)
            }
        </div>
    );
};

export default ChatUI;