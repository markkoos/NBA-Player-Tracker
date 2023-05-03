import React, {useState} from 'react';

export default function Home() {

    // useState for the query inputted in the search bar
    const [searchQuery, setQuery] = useState('');
    // useState for the returned search data from the API
    const [searchData, setData] = useState([]);

    // handle function for search bar 
    const handleSearch = (e) => {
        setQuery(e.target.value);
      }

    // get request for the balldontlie API
    async function fetchData(e) {
        e.preventDefault();
        const res = await fetch(`https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players?search=${searchQuery}`);
        const data = await res.json();
        const playerData = await data?.data || []; 
        setData(playerData);
        console.log(playerData);
    }
    

    return (
        <div>
            <form className="form title" onSubmit={fetchData}>
                <br></br>
                <center>
                <h1>Search for Players</h1>
                {/* Search Bar to look up Players */}
                <input type="text" placeholder="Search for a player" value={searchQuery} onChange={handleSearch}></input>
                <button type="submit">Search</button>
                </center>
            </form>        
            {searchData && searchData.map((player) => (
            <div className="card mx-auto" key="0">
                <div className="card-header" key={player.id}>
                    {player.first_name} {player.last_name}
                </div>
                <ul className="list-group list-group-flush" key="0">
                    <li className="list-group-item" key="1">{player.team.abbreviation}</li>
                    <li className="list-group-item" key="2">{player.height_feet}'{player.height_inches}</li>
                    <li className="list-group-item" key="3">{player.weight_pounds}</li>
                </ul>
            </div>  
            ))}
        </div>
    )
}
