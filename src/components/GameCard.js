import '../styles/GameCard.css';
import { useState } from 'react';

function GameCard({ game, removeGame, toggleActive }) {

    const [activeStatus, setActiveStatus] = useState(game.active)

    function handleRemoveGame() {
        removeGame(game.id);
    }

    function handleToggleActive() {
        const updatedPlayerGame = {
            id: game.id,
            player_id: game.player_id,
            game_id: game.game_id,
            active: !activeStatus
        };

        setActiveStatus((activeStatus) => !activeStatus);

        toggleActive(updatedPlayerGame);
    }

    return (
        <div className="game-card">
            <img alt="game logo" src={game.game.image_url} />
            <h3>{game.game.name}</h3>
            <button onClick={handleRemoveGame}>Remove</button><br />
            Currently playing <input type="checkbox" checked={activeStatus ? "checked" : ""} onChange={handleToggleActive}></input>
        </div>
    );
}

export default GameCard;