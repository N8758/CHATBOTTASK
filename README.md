# Chatbot Application  

## 📌 Project Overview  
This is a **React-based chatbot** that allows users to send and receive messages. The backend is built using **Node.js and Express**, with **PostgreSQL, MySQL, or SQLite** as the database. The chatbot retrieves and displays data based on user queries.  

---

## 🛠️ Tech Stack  

### **Frontend (React.js)**
- React 19  
- Axios (for API requests)  
- React Router (for navigation)  

### **Backend (Node.js + Express)**
- Node.js  
- Express.js  
- PostgreSQL / MySQL / SQLite (Database)  
- Sequelize ORM  

---

## 📂 Project Structure  

chatbot-app/ │── backend/ │ │── models/ │ │ │── Message.js # Database model for storing messages
│ │── routes.js # API routes for chatbot interactions
│ │── database.js # Database connection file
│ │── server.js # Main server file
│ │── .env # Environment variables
│
│── frontend/ │ │── src/ │ │ │── components/
│ │ │── App.js # Main React component
│ │ │── index.js # Entry point for React
│ │── public/
│ │── package.json # Frontend dependencies
│
│── README.md # Documentation

yaml
Copy
Edit

---

## ⚙️ Installation & Setup  

### **1️⃣ Install Node.js and NPM**  
- Download and install [Node.js](https://nodejs.org/) (which includes npm).  
- Verify installation:  
  ```sh
  node -v
  npm -v
2️⃣ Setup Backend
Step 1: Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/chatbot-app.git
cd chatbot-app/backend
Step 2: Install Dependencies
sh
Copy
Edit
npm install
Step 3: Configure Environment Variables
Create a .env file in the backend folder:

makefile
Copy
Edit
PORT=5000
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_NAME=chatbot_db
DB_PORT=5432
Step 4: Start the Backend Server
sh
Copy
Edit
node server.js
You should see:

arduino
Copy
Edit
🚀 Server running on http://localhost:5000
✅ Database Connected Successfully
3️⃣ Setup Frontend
Step 1: Navigate to the Frontend Folder
sh
Copy
Edit
cd ../frontend
Step 2: Install Dependencies
sh
Copy
Edit
npm install
Step 3: Start the React App
sh
Copy
Edit
npm start
Your React app will start on:

arduino
Copy
Edit
http://localhost:3000
