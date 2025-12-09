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
import './App.css' 

export default function App() {
  return (
    <div className="app-container">
      
      <div className="overlay"></div>

      <div className="content-wrapper">
        <h1 className="hero-title">Discover Your Next Adventure</h1>
        <p className="hero-subtitle">
          Experience the world with our AI-powered travel assistant. 
          
        </p>
      </div>

      
      <ChatWidget />
    </div>
  )
}