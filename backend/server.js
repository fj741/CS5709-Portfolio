const express = require("express");
const dotenv = require("dotenv");
const {Server} = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;
app.use(express.json())

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5137',
        methods: ['GET', 'POST']
    }
})
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('send_message', (data) => {
    io.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(5000, () => {
  console.log('Server running on http://localhost:3000');
});

dotenv.config();


app.listen(3000, () =>{
    console.log(`Listening on port: 3000`)
})


