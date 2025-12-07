import React, { useState, useRef, useEffect } from 'react'
import ChatMessage from './ChatMessage.jsx'
import ChatInput from './ChatInput.jsx'
import { sendMessage } from '../services/chatService.js'


export default function ChatBox({ onClose }) {
    const [messages, setMessages] = useState([
        { id: 0, from: 'bot', text: 'Hello! I can suggest places and hotels. Try: "places in Kandy"' }
    ])
    const scrollRef = useRef(null)


    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }, [messages])


    const handleSend = async (text) => {
        if (!text) return
        const userMsg = { id: Date.now(), from: 'user', text }
        setMessages(m => [...m, userMsg])


        const res = await sendMessage(text)
        const botMsg = { id: Date.now()+1, from: 'bot', text: res.reply }
        setMessages(m => [...m, botMsg])
    }


    return (
        <div className="chatbox">
            <div className="chatbox-header">
                <div>Travel Assistant</div>
                <button onClick={onClose}>x</button>
            </div>
            <div className="chatbox-messages" ref={scrollRef}>
               {messages.map(m => <ChatMessage key={m.id} message={m} />)}
            </div>
            <ChatInput onSend={handleSend} />
        </div>
    )
}