import React, { useContext, useEffect, useState } from "react";
import {ReactComponent as MessageInputIcon} from "../../../assets/icons/microphone.svg"
import {ReactComponent as MessageSendIcon} from "../../../assets/icons/paper-plane.svg"
import NormalButton from "../../common/NormalButton";
import "./MessageInput.css"
import { LessonContext } from "../WorkingArea";

const commendStyles = ["Plannned", "Start", "Continue", "Test"]
const commendMethod = ["/plan", "/start", "/continue", "/test"]

const MessageInput = ({activetab}) => {
    const [selectedButton, setSelectedButton] = useState(0);
    const [selectedMethod, setSelectedMethod] = useState("/plan");
    const {userMessage, setUserMessage, messageHistory, setMessageHistory} = useContext(LessonContext);

    const handleChangeMethod = (idx) => {
        setSelectedButton(idx);
        setSelectedMethod(commendMethod[idx]);
    }

    const handleSendMessage  = async () => {
        if (activetab != "topbar-tab1") {
            console.log(selectedMethod)
            setMessageHistory([...messageHistory, {user: 'User', text: userMessage}])
    
            const response = await fetch("/api/query/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: userMessage,
                    method: selectedMethod
                })
            })

            setUserMessage("")
    
            console.log(response)
    
            if(response.ok) {
                const eventSource = new EventSource('/api/lesson_res/')
                eventSource.onmessage = (event) => {
                    setMessageHistory((prevMessageHistory) => {
                        const updatedMessageHistory = [...prevMessageHistory];
                        
                        // Check if the last message was from the Bot
                        if (updatedMessageHistory.length > 0 && updatedMessageHistory[updatedMessageHistory.length - 1].user === 'Bot') {
                            // Update the last Bot message
                            updatedMessageHistory[updatedMessageHistory.length - 1].text += event.data;
                        } else {
                            // If the last message was not from the Bot, add a new Bot message
                            updatedMessageHistory.push({user: 'Bot', text: event.data});
                        }
                        
                        return updatedMessageHistory;
                    })
                }
                eventSource.addEventListener('terminate', function() {
                    eventSource.close();
                });
            }
        }
    }

    return (
        <div className="submit-container">
            {activetab != "topbar-tab1" &&
            <div className="commendstyle-container">
                <h1>Lesson App</h1>
                <div className="commendstyle-btns">
                    {
                        commendStyles.map((commend, index) => 
                            <NormalButton
                                key={index}
                                label={commend}
                                isSelected={selectedButton == index}
                                onClick={() => handleChangeMethod(index)}
                            />
                        )
                    }
                </div>
            </div>
            }
            <div className="messageinput-container">
                <MessageInputIcon className="messageinput-icon"/>
                <input value={userMessage} onChange={(e) => setUserMessage(e.target.value)} className="message-input" placeholder="You can ask me anything! I am here to help"/>
                <span className="messagesend-icon" onClick={handleSendMessage}>
                    <MessageSendIcon/>
                </span>
            </div>
        </div>
    );
};

export default MessageInput;