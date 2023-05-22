import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav';

export default function Home() {

    // useState for the query inputted in the search bar
    const [searchQuery, setQuery] = useState('');
    // useState for the returned search data from the API
    const [searchData, setData] = useState([]);
    // useState for the player that user wants to save to their profile
    const [savedPlayer, setPlayer] = useState({ player_id: '', first_name: '', last_name: '', })

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
        <div className='container'>

            <div className="row">
                <form className="form title" onSubmit={fetchData}>
                    <br></br>
                    <center>
                    <h3>Search for Players</h3>
                    {/* Search Bar to look up Players */}
                    <div className="input-group input-group-lg">
                        <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="ie. Stephen Curry" value={searchQuery} onChange={handleSearch}></input>
                        <button type="button" className="btn btn-dark">🔍</button>
                        <button type="button" className="btn btn-warning">💾</button>
                    </div>
                    </center>
                </form>
            </div>

            <br />
            {/* for each player found in search results, render their info onto a player card */}
            {searchData && searchData.map((player) => (
                <Card className="text-white bg-dark mb-3" style={{width: '81rem'}} key={player.id}>
                    <Card.Header>
                    <Nav className='playerData' variant="tabs" defaultActiveKey="#first" key={Math.random()}>
                        <Nav.Item className="playerItem"> 
                                {player.team.abbreviation}
                        </Nav.Item>
                        <Nav.Item className="playerItem">
                                {player.first_name} {player.last_name}
                        </Nav.Item>
                        <Nav.Item className="playerItem">
                                {player.height_feet}'{player.height_inches}
                        </Nav.Item>
                        <Nav.Item className="playerItem">
                                {player.position}        
                        </Nav.Item>
                        <Nav.Item className="playerItem">    
                                {player.weight_pounds} lbs    
                        </Nav.Item>
                        <Nav.Item className="playerItem">
                                <div class="form-check">
                                    <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></input>
                                </div>
                        </Nav.Item>
                    </Nav>
                    </Card.Header>
                </Card> 
            ))} 
        </div>
    )   
}
