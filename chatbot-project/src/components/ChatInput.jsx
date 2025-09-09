import { useState } from 'react'
import { Chatbot } from 'supersimpledev';

 function ChatInput({ chatMessages, setChatMessages }) { // Component function

      // State variable - inputText
      // Updater function - setInputText

      const [inputText, setInputText] = useState('');

      function saveInputText(event) {
        setInputText(event.target.value);
      }

      function sendMessage() {
        const newChatMessages = [...chatMessages,
        {
          message: inputText,
          sender: "user",
          id: crypto.randomUUID()
        }
        ];

        setChatMessages(newChatMessages);

        const response = Chatbot.getResponse(inputText);
        setChatMessages([
          ...newChatMessages,  //Spread operator
          {
            message: response,
            sender: "robot",
            id: crypto.randomUUID()
          }
        ]);

        setInputText('');

      }

      function handleKeyDown(event) {
        if (event.key === 'Enter') {
          sendMessage();
        } else if (event.key === 'Escape') {
          setInputText('');
        }
      }

      return (
        <div className="chat-input-container">
          <input
            type="text"
            placeholder="Type a message..."
            onChange={saveInputText}
            onKeyDown={handleKeyDown}
            value={inputText}
            className="js-input"
          />
          <button onClick={sendMessage}
            className="js-send-button"
          >Send</button>
        </div>
      );
    }

    export default ChatInput;