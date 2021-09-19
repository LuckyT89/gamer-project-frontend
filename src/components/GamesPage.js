import { useState, useEffect } from 'react';
import GameCard from './GameCard';


function GamesPage() {

    // Find the player id from the URL
    const pathName = window.location.pathname;
    const playerId = pathName.split('/')[2];

    const baseURL = 'http://127.0.0.1:3000';

    // State starts as an empty array
    const [playerGames, setPlayerGames] = useState([]);
    const [games, setGames] = useState([]);

    // Get a list of all games associated to the player id in the URL. Update state so it now has 
    // an array of playerGame objects. 
    useEffect(() => {
        fetch(`${baseURL}/player_games/${playerId}`)
        .then(res => res.json())
        .then(resPlayers => {
            setPlayerGames(resPlayers);
        })
    }, [playerId]); // React console warning wanted teamId in the dependency array here even though it worked without it. 

    // Map over the array of player objects stored in state and make a GameCard component for each one.
    const gameCards = playerGames.map((game) => <GameCard key={game.id} game={game} />);



    // This request gets all of the games in the database, not just the ones associated with the selected player. This is needed to they can 
    // have a list of all available games to choose from if they add a game. 
    useEffect(() => {
        fetch(`${baseURL}/games`)
        .then(res => res.json())
        .then(resGames => {
            setGames(resGames);
        })
    }, []); 

    // Create the options in the dropdown menu for the user to select- this should be a list of all video game titles in the database.
    const gamesList = games.map(game => <option key={game.id} value={game.id}>{game.name}</option>)

    // When the user selects a game from the dropdown menu, selectedGameId should update to be the id of that selected game. ParseInt is used 
    // because the id would be a string for some reason without this. 
    const [selectedGameId, setSelectedGameId] = useState(0);
    function handleGameChange(e) {
        setSelectedGameId(parseInt(e.target.value));
    }

    // Fires whenever the Add button is clicked. Make a POST request to create a new PlayerGame object in the database for the current player and the selected game. 
    // Then add that game to the screen. 
    function AddGame() {
        // newPlayerGame has the data for the new PlayerGame we want to create with our POST request. 
        const newPlayerGame = {
            "player_id": playerId,
            "game_id": selectedGameId,
            "active": true
        }

        // We pass config into our POST request. It includes our newPlayerGame
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlayerGame)
        };


        // We need to get the game object that was selected in the dropdown- the actual object, not just the game id. We do not need this to make our 
        // POST request but we do need this data for when we update the state and display this newly added PlayerGame to the screen. 
        let selectedGameObject = {};
        games.forEach(game => {
            if (game.id === selectedGameId) {
                selectedGameObject = game;
            }
        });

        // Make our POST request to add a PlayerGame to the database and then update state to display this new game at 
        // the end of the list. 
        fetch(`${baseURL}/player_games`, config)
            .then(res => res.json())
            .then(player => {
                // The response is just the PlayerGame object- we need to add the game property to this which includes the name of the game
                // and the image URL. We need this info to display it properly on the screen. 
                player.game = selectedGameObject;
                setPlayerGames([...playerGames, player]);
            })  
    }

    return (
        <div>
            Games Page
            
            <select name="games" onChange={handleGameChange}>
                <option>Add game</option>
                {gamesList}
            </select>
            <button onClick={AddGame}>Add</button>

            { gameCards }
        </div>
    );
}

export default GamesPage;