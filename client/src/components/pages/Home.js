import React from 'react';

export default function Home() {
    return (
        <center>
        <h1>Search for Players</h1>
        {/* Search Bar to look up Players */}
        <div className="input-group input-group-lg">
            <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"></input>
        </div>
        </center>
    )
}
