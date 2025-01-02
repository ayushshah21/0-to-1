"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
function App() {
    const [socket, setSocket] = (0, react_1.useState)(null);
    const [messages, setMessages] = (0, react_1.useState)([""]);
    const [userMessage, setUserMessage] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        const newSocket = new WebSocket(`ws://localhost:8080`);
        newSocket.onopen = () => {
            console.log("Connection Established");
            newSocket.send("Hello Server");
        };
        newSocket.onmessage = (message) => {
            console.log('Message received:', message.data);
            setMessages(prevMessages => [...prevMessages, message.data]);
        };
        setSocket(newSocket);
        return () => newSocket.close();
    }, []);
    function sendMessage() {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(userMessage);
        }
    }
    return (<div>
      <input type="text" placeholder='Add Message' value={userMessage} onChange={(e) => setUserMessage(e.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>
      <div>
        {messages.map((message, i) => (<div key={i}>
            {message}
          </div>))}
      </div>
   </div>);
}
exports.default = App;
