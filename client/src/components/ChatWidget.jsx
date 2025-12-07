import React, { useState } from 'react'
import ChatBox from './ChatBox.jsx'


export default function ChatWidget() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            {open && <ChatBox onClose={() => setOpen(false)} />}
            <button className="chat-toggle" onClick={() => setOpen(s => !s)}>
             {open ? 'Close' : 'Chat'}
            </button>
        </div>
    )
}