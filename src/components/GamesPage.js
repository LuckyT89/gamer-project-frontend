import { useState, useEffect } from 'react';
import GameCard from './GameCard';


function GamesPage() {

    // Find the player id from the URL
    const pathName = window.location.pathname;
    const playerId = pathName.split('/')[2];

    const baseURL = 'http://127.0.0.1:3000';

    // State starts as an empty array
    const [playerGames, setPlayerGames] = useState([]);

    // Get a list of all players that match the team id from the url. Update state so it 
    // now has an array of player objects. 
    useEffect(() => {
        fetch(`${baseURL}/player_games/${playerId}`)
        .then(res => res.json())
        .then(resPlayers => {
            setPlayerGames(resPlayers);
            console.log(resPlayers);
        })
    }, [playerId]); // React console warning wanted teamId in the dependency array here even though it worked without it. 

    // Map over the array of player objects stored in state and make a GameCard component for each one.
    const gameCards = playerGames.map((game) => <GameCard key={game.id} game={game} />);


    return (
        <div>
            Games Page
            { gameCards }
        </div>
    );
}

export default GamesPage;