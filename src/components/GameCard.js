import '../styles/GameCard.css';

function GameCard({ game, removeGame }) {

    function handleRemoveGame() {
        removeGame(game.id);
    }

    return (
        <div className="game-card">
            <h3>{game.game.name}</h3>
            <button onClick={handleRemoveGame}>Remove</button><br />
            Currently playing <input type="checkbox" checked="checked"></input>
        </div>
    );
}

export default GameCard;