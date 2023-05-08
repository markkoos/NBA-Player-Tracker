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
        <div>
            <form className="form title" onSubmit={fetchData}>
                <br></br>
                <center>
                <h3>Search for Players</h3>
                {/* Search Bar to look up Players */}
                <input type="text" placeholder="ie. Stephen Curry" value={searchQuery} onChange={handleSearch}></input>
                <button type="button">Submit</button>
                </center>
            </form> 
            <br />
            {/* for each player found in search results, render their info onto a player card */}
            {searchData && searchData.map((player) => (
                <Card className=" text-white bg-dark mb-3" style={{width: '47rem'}} key={player.id}>
                    <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first" key={Math.random()}>
                        <Nav.Item>
                            <Nav.Link href="#disabled" disabled>
                                {player.team.abbreviation}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled" disabled>
                                {player.first_name} {player.last_name}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled" disabled>
                                {player.height_feet}'{player.height_inches}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled" disabled>
                                {player.position}
                                </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled" disabled>
                                {player.weight_pounds} lbs
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled" disabled>
                                <button type="button" className="btn btn-warning">Save Player</button>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                </Card>   
            ))} 
        </div>
    )   
}
