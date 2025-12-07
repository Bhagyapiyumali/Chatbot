import React, { useState } from 'react'

export default function ChatInput({ onSend }) {
    const [text, setText] = useState('')

    const submit = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        onSend(text.trim())
        setText('')
    }
    return (
        <form className="chat-input" onSubmit={submit}>
            <input value={text} onChange={e => setText(e.target.value)} 
            placeholder="Ask about places, hotels..." />
            <button type="submit">Send</button>
        </form>
    )
}
