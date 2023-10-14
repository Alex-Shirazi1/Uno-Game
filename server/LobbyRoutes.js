const express = require('express');
const router = express.Router();
const Lobby = require('./models/Lobby');

// POST request to create a new lobby
router.post('/lobbies', async (req, res) => {
    console.log("Lobby creation IP");
    try {
        const lobby = new Lobby(req.body);
        await lobby.save();
        res.status(201).send(lobby);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET request to fetch all lobbies
router.get('/lobbies', async (req, res) => {
  try {
    const lobbies = await Lobby.find();
    res.send(lobbies);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
