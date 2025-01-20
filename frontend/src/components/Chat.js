import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/chat`, { message: input });
      const botMessage = { text: response.data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }

    setInput("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.sender === "user" ? styles.userMessage : styles.botMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  container: { width: "400px", margin: "20px auto", fontFamily: "Arial" },
  chatBox: { height: "400px", overflowY: "scroll", border: "1px solid #ccc", padding: "10px" },
  inputContainer: { display: "flex", marginTop: "10px" },
  input: { flex: 1, padding: "10px", border: "1px solid #ccc" },
  button: { padding: "10px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" },
  userMessage: { textAlign: "right", color: "blue", marginBottom: "10px" },
  botMessage: { textAlign: "left", color: "green", marginBottom: "10px" },
};

export default Chat;
