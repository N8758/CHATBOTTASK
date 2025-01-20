const { Pool } = require("pg");

// Database connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Create Messages Table if not exists
const createTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        user_message TEXT NOT NULL,
        bot_response TEXT NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("✅ Messages table is ready");
  } catch (error) {
    console.error("❌ Error creating messages table:", error.message);
  }
};

// Call the function to create the table
createTable();

// Message Model
const Message = {
  save: async (userMessage, botResponse) => {
    try {
      const query = `INSERT INTO messages (user_message, bot_response) VALUES ($1, $2) RETURNING *`;
      const { rows } = await pool.query(query, [userMessage, botResponse]);
      return rows[0];
    } catch (error) {
      console.error("❌ Error saving message:", error.message);
      throw error;
    }
  },

  getRecentMessages: async (limit = 20) => {
    try {
      const query = `SELECT * FROM messages ORDER BY timestamp DESC LIMIT $1`;
      const { rows } = await pool.query(query, [limit]);
      return rows;
    } catch (error) {
      console.error("❌ Error fetching messages:", error.message);
      throw error;
    }
  },
};

module.exports = Message;
