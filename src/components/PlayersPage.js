import { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';

function PlayersPage() {

    // const baseURL = 'http://127.0.0.1:3000';
    const baseURL = 'https://gamer-project-backend.herokuapp.com/';

    const [players, setPlayers] = useState([]);

    // Get a list of all gamers. Update state so it now has an array of gamer objects. 
    useEffect(() => {
        fetch(`${baseURL}/players`)
            .then(res => res.json())
            .then(resPlayers => {
            setPlayers(resPlayers);
            })
        }, []);

    // Map over the array of player objects and make a PlayerCard component for each one.
    const playerCards = players.map((player) => <PlayerCard key={player.id} player={player} />);

    return (
        <div>
            Select a player to see which games they play
            { playerCards }
        </div>
    );
}

export default PlayersPage;