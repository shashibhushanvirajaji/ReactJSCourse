  import { useRef, useEffect } from 'react'
   import { ChatMessage } from './ChatMessage'

function ChatMessages({ chatMessages }) {
      const chatMessagesRef = useRef(null);


      useEffect(() => {
        if (chatMessagesRef.current) {
          chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }

      }, [chatMessages]);

      return (
        < div className="chat-messages-container" ref={chatMessagesRef}>
          {chatMessages.map((chatMessage) => (
            <ChatMessage key={chatMessage.id} message={chatMessage.message} sender={chatMessage.sender} />
          ))}
        </div>
      );

    }

    export default ChatMessages;