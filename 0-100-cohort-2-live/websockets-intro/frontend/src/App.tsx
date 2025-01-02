import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<{ type: 'sent' | 'received'; text: string }[]>([]);
  const [userMessage, setUserMessage] = useState('');
  const userMessageRef = useRef('');

  useEffect(() => {
    const newSocket = new WebSocket(`ws://localhost:8080`);
    newSocket.onopen = () => {
      console.log('Connection Established');
      newSocket.send('Hello Server');
    };
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);

      // Check if the message matches the user's sent message
      const isSent = message.data === userMessageRef.current;
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: isSent ? 'sent' : 'received', text: message.data },
      ]);

      if (isSent) userMessageRef.current = ''; // Clear the ref after matching
    };
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  function sendMessage() {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(userMessage);
      userMessageRef.current = userMessage; // Preserve the user message
      setUserMessage('');
    }
  }

  return (
    <div className="container">
      <div className="header">Chat App</div>
      <div className="messages-container">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`message ${message.type}`} // Apply the `sent` or `received` class
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
