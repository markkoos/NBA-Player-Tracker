import React, {useState, useEffect} from 'react';

export default function Home() {

    // useState for the query inputted in the search bar
    const [searchQuery, setQuery] = useState('');
    // useState for the returned search data from the API
    const [searchData, setData] = useState('');

    useEffect(() => {
        // get request for the balldontlie API
        fetch(`https://balldontlie.io/api/v1/players?search=${searchQuery}`)
            .then(response => {
                if (response.ok) {
                    // if the response is valid, set the searchData variable to the response
                    setData(response.json());
                    console.log(searchData); 
                } else {
                    console.log("error in response");
                }
            })
        }   // empty dependency array means this effect will only run once
        )
        
    return (
        <div>
            <br></br>
            <center>
            <h1>Search for Players</h1>
            {/* Search Bar to look up Players */}
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"></input>
            </div>
            </center>
        </div>
    )
}
