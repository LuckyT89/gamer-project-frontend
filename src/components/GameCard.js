import '../styles/GameCard.css';

function GameCard({ game }) {
    return (
        <div className="game-card">
            Game card
            <h3>{game.game.name}</h3>
        </div>
    );
}

export default GameCard;