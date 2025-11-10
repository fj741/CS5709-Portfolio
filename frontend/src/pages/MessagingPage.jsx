import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

function MessagingPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off('receive_message');
  }, []);

  const sendMessage = () => {
    socket.emit('send_message', { text: message });
    setMessage('');
  };

  return (
    <div className="p-4">
      <div className="space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="bg-gray-100 p-2 rounded">{msg.text}</div>
        ))}
      </div>
      <input
        className="border p-2 mt-4 w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default MessagingPage;