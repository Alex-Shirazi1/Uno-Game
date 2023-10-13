from flask import Flask, request, jsonify
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return "UNO Game Server is Running"

@socketio.on('connect')
def handle_connect():
    print('Client Connected')
    socketio.emit('response', {'message': 'connected'})

@socketio.on('join_game')
def handle_join_game(data):
    print(f"Player {data['username']} joined game {data['game_id']}")
    # You can add logic here to handle the player joining the game,
    # such as updating the game state and notifying other players.
    socketio.emit('player_joined', data)

if __name__ == '__main__':
    if app.debug:
        socketio.run(app, debug=True, host='0.0.0.0', port=4000)
