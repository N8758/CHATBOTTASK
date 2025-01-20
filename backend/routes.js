const express = require("express");
const router = express.Router();
const pool = require("./database");

// Function to process chatbot responses
const getBotResponse = (userMessage) => {
  userMessage = userMessage.toLowerCase();
  
  const responses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! What do you need help with?",
    "how are you": "I'm just a bot, but I'm here to help!",
    "bye": "Goodbye! Have a great day!",
  };

  return responses[userMessage] || "I'm not sure. Can you rephrase?";
};

// API Endpoint: Send & Receive Messages
router.post("/send-message", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message cannot be empty" });

    const botResponse = getBotResponse(message);

    // Save to database
    const query = "INSERT INTO messages (user_message, bot_response) VALUES ($1, $2) RETURNING *";
    const { rows } = await pool.query(query, [message, botResponse]);

    res.json({ user_message: message, bot_response: botResponse, id: rows[0].id });
  } catch (error) {
    console.error("Error processing message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API Endpoint: Retrieve Message History
router.get("/messages", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM messages ORDER BY timestamp DESC LIMIT 20");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
