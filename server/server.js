const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const lobbyRoutes = require('./LobbyRoutes');
const app = express();
const server = http.createServer(app);
const cors = require('cors');
const connectDB = require('./db')


connectDB()
app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(express.json());

app.use('/lobbies', lobbyRoutes);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('playerAction', (data) => {
        console.log(data);
        io.emit('updateGame', {});
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
