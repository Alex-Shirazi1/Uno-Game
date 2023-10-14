const mongoose = require('mongoose');

const lobbySchema = new mongoose.Schema({
    name: String,
    players: [{
        username: String,
        userId: mongoose.Schema.Types.ObjectId,
    }],
    maxPlayers: Number,
    currentGame: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
    },
});

const Lobby = mongoose.model('Lobby', lobbySchema);

module.exports = Lobby;
