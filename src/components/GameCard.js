

function GameCard({ game }) {
    return (
        <div>
            Game card
            <h3>{game.game.name}</h3>
        </div>
    );
}

export default GameCard;