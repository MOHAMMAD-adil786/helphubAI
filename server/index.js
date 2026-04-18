const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// Routes
const aiRoute = require('./routes/aiRoute');
const requestRoute = require('./routes/requestRoute');
app.use('/api/ai', aiRoute);
app.use('/api/requests', requestRoute);

// MongoDB Connection with timeout options
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 15000,
  socketTimeoutMS: 45000,
  tls: true,
  tlsAllowInvalidCertificates: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected to personDB'))
  .catch(err => {
    console.error('MongoDB Connection Error:', err.message);
    console.log('Continuing without database - some features will not work');
  });

// Socket.io Connection Logic
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Basic Route
app.get('/', (req, res) => {
  res.send('Help Hub AI Server is Running');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
