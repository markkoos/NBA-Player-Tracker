import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
            <br />
            {/* for each player found in search results, render their info onto a player card */}
            {searchData && searchData.map((player) => (
                <Card className="text-white bg-dark mb-3" style={{width: '18rem'}} key={player.id}>
                    <div className="card-header" key={Math.random()}>{player.team.full_name}</div>
                    <div className="card-header" key={Math.random()}><h5 className="card-title" key={Math.random()}>{player.first_name} {player.last_name}</h5></div>
                    <ul variant="flush bg-dark mb-3" key={Math.random()}>
                        <li className="searchLi" key={Math.random()}>{player.height_feet}'{player.height_inches}</li>
                        <li className="searchLi" key={Math.random()}>{player.position}</li>    
                        <li className="searchLi" key={Math.random()}>{player.weight_pounds} lbs</li>
                    </ul>    
                </Card>     
            ))}
        </div>
    )   
}
