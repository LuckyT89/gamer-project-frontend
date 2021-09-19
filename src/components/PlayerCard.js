import { Link } from "react-router-dom";
import '../styles/PlayerCard.css';

function PlayerCard({ player }) {
    return (
        <div>
            <Link to={`players/${player.id}`}>
                <h2 className='player'>{player.gamer_tag}</h2>
            </Link>
        </div>
    );
}

export default PlayerCard;