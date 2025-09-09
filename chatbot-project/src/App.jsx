import { useState } from 'react'                      //named import
import ChatInput  from './components/ChatInput'
import  ChatMessages  from './components/ChatMessages' //default import
import './App.css'
 

 



function App() {

      const [chatMessages, setChatMessages] = useState([
        { message: "hello Chatbot", sender: "user", id: crypto.randomUUID() },
        { message: "how can i help you", sender: "robot", id: crypto.randomUUID() },
        { message: "can you get todays date", sender: "user", id: crypto.randomUUID() },
        { message: "today is september 3", sender: "robot", id: crypto.randomUUID() },
      ]);
      return (
        <div className="app-chat-container">

          <ChatMessages chatMessages={chatMessages} />
          <ChatInput chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        </div>
      )
    }

export default App
