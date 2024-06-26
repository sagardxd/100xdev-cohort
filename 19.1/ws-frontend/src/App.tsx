import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080")
    socket.onopen = () => {
      console.log('Connected');
      setSocket(socket)
    }

    socket.onmessage = (message) => {
      console.log("Message received", message.data)
    }
  }, []);

  return (
    <div></div>
  )
}

export default App
