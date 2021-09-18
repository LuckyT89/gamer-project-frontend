import { useState, useEffect } from 'react';

function PlayersPage() {

    const baseURL = 'http://127.0.0.1:3000';

    const [players, setPlayers] = useState([]);

    // Get a list of all gamers. Update state so it now has an array of gamer objects. 
    useEffect(() => {
        fetch(`${baseURL}/players`)
            .then(res => res.json())
            .then(resPlayers => {
            setPlayers(resPlayers);
            console.log(resPlayers);
            })
        }, []);

    return (
        <div>
            Gamers Page
        </div>
    );
}

export default PlayersPage;