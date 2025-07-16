import React, { useState, useRef, useEffect } from 'react';
import './css/Chatbot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hi! I'm Impana's AI assistant. Ask me anything about her work, skills, or projects! 🚀"
    }
  ]);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput('');

    setTimeout(() => {
      const responses = [
        "Impana is a passionate full-stack developer with expertise in MERN stack and cloud technologies! 🚀",
        "She loves automating processes with Selenium and building scalable applications! 🔧",
        "Her projects showcase a perfect blend of frontend elegance and backend robustness! 💻",
        "She's always excited to take on new challenges and learn cutting-edge technologies! 🌟",
        "Fun fact: She talks a lot with close ones but is quiet otherwise! 😄"
      ];
      const reply = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div className="chat-bot-button" onClick={toggleChat}>🤖</div>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">Chat with Impana's AI</div>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
