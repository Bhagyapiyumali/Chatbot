import React from 'react'


export default function ChatMessage({ message }) {
    const isUser = message.from === 'user'
    return (
        <div className={`message ${isUser ? 'message-user' : 'message-bot'}`}>
            <div className="message-text">{message.text}</div>
        </div>
    )
}