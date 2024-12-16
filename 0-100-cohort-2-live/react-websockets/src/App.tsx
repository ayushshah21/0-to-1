import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const[latestMessages, setLatestMessages] = useState([""]);
  const[message, setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connected");
      setSocket(socket);
    };
    socket.onmessage = (message) => {
      console.log("Message Received", message.data);
      setLatestMessages((prevMessages) => [...prevMessages, message.data]);
    };
    return () =>{
      socket.close();
    }

  }, []);

  if (!socket) {
    return <div>Connecting to socket server...</div>;
  }

  return (
    <>
    <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" />
    <button onClick={() => {
      socket.send(message);
    }}>Send</button>
      <div>{latestMessages.map((l, i) => (
        <p key={i}>{l}</p>
      ))}</div>
    </>
  );
}

export default App;
