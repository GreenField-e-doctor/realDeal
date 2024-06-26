'use client'
import React, { useState, useEffect, useRef } from 'react';
import  styles from '../styles/Chat.module.css'
import { IoSend } from "react-icons/io5";
import Footer from '../homepage/Footer';
import NavBar from '../homepage/NavBar';
interface User {
  id: string;
  name: string;
  image:string
  role:string
}
interface Message {
  name: string;
  message: string;
  role: string;
}

interface Props {
  user: User;
}

const ChatComponent: React.FC<Props> = () => {
  
  const [message, setMessage] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ name: "Community", message: "Welcome to the chat!", role: 'chatBot' }]);
  const [users, setUsers] = useState<User[]>([]);
  const ws = useRef<WebSocket | null>(null);
  useEffect(() => {
    const storedUserString = localStorage.getItem("user");
    if (storedUserString) {
      const storedUser = JSON.parse(storedUserString).user as User;
      setUser(storedUser);
    }
  }, []);
  
  useEffect(() => {
    function connect() {
      ws.current = new WebSocket('ws://localhost:1128');

      ws.current.onopen = () => {
        console.log('Connected to WebSocket server');
        const newUserMessage = JSON.stringify({ type: 'newUser', name: user?.name || 'Anonymous', role: user?.role });
        ws.current?.send(newUserMessage);
      };

      ws.current.onmessage = (event) => {
        if (event.data instanceof Blob) {
          const reader = new FileReader();
          reader.onload = function () {
            handleReceivedData(this.result);
          };
          reader.readAsText(event.data);
        } else {
          handleReceivedData(event.data);
        }
      };

      ws.current.onclose = () => {
        console.log('Disconnected from WebSocket server, attempting to reconnect...');
        setTimeout(connect, 1000);
      };

      ws.current.onerror = (error) => {
        console.error('WebSocket error:', error);
        ws.current?.close();
      };
    }
    function handleReceivedData(data: any) {
      try {
        const parsedData = JSON.parse(data);
        if (parsedData.type === 'userList') {
          setUsers(parsedData.users);
        } else if (parsedData.type === 'message') {
          setMessages(prevMessages => [...prevMessages, parsedData]);
        }
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    }
    connect();

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [user?.name, user?.role]);

  const getUsernameColor = (username: string) => {
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = hash % 360;
    return `hsl(${h}, 80%, 60%)`;
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !ws.current || ws.current.readyState !== WebSocket.OPEN) return;
  
    const messageData = { type: 'message', name: user?.name || 'Anonymous', message, role: user?.role };
    ws.current.send(JSON.stringify(messageData));

    setMessage(''); 
  
    
  };

  return (<div>

  <NavBar/>
    <div className={styles['chat-container']}>
      <h2>Community Room</h2>
      <div className={styles["user-list"]}>
        <strong>Users Online:</strong>
        {messages.map((msg, index) => (
          <div key={index} style={{ color: getUsernameColor(msg.name) }}>{msg.name}-{msg.role}</div>
        ))}
      </div>
      <hr />
       <div id="messages" className={styles["messages"]}>
        {messages.map((msg, index) => (
          <p key={index} className={styles[`message ${msg.name === user?.name ? "my-message" : ""}`]}>
            <strong style={{ color: getUsernameColor(msg.name) }}>{msg.name}</strong>: {msg.message}
          </p>
        ))}
      </div>
      <div className={styles["chat-input-container"]}>
        <input
          className={styles["chat-input"]}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <IoSend  onClick={sendMessage} className={styles["chat-send-btn"]}/>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ChatComponent;
