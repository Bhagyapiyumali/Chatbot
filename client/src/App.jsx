/*import { useState } from 'react'
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
*/

import { useState } from 'react'
import ChatWidget from './components/ChatWidget.jsx'
import './App.css' // Ensure CSS is imported

export default function App() {
  return (
    <div className="app-container">
      {/* Background overlay for better text readability */}
      <div className="overlay"></div>

      <div className="content-wrapper">
        <div className="glass-card">
          <h1 className="title">Tourism Website (Demo)</h1>
          <p className="subtitle">This page shows how the chatbot integrates.example mini application. It’s a small demo.
            with real time chat capabilities.
          </p>
        </div>
      </div>
      
      {/* The widget sits outside the glass card so it overlays nicely */}
      <ChatWidget />
    </div>
  )
}

