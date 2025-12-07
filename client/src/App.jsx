import { useState } from 'react'
import ChatWidget from './components/ChatWidget.jsx'


export default function App() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Tourism Website (Demo)</h1>
      <p style={{textAlign:'center'}}>This page shows how the chatbot integrates. It’s a small demo.</p>
      <ChatWidget />
    </div>
  )
}

