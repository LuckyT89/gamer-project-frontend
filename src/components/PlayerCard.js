import { Link } from "react-router-dom";


function PlayerCard({ player }) {
    return (
        <div>
            <Link to={`players/${player.id}`}>
                <h2>{player.gamer_tag}</h2>
            </Link>
        </div>
    );
}

export default PlayerCard;