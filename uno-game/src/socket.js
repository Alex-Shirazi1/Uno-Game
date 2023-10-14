import { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

function GameComponent() {
    useEffect(() => {
        socket.on('updateGame', (data) => {
            console.log(data);
        });

        return () => {
            socket.off('updateGame');
        };
    }, []);

    const sendEvent = () => {
        socket.emit('playerAction', {});
    };

    return (
        <div>
            {}
            <button onClick={sendEvent}>Send Event</button>
        </div>
    );
}

export default GameComponent;
