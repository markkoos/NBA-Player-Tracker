import React from 'react';

export default function Home() {
    return (
        <center>
        <h1>Search for Players</h1>
        {/* Search Bar to look up Players */}
        <div class="input-group input-group-lg">
            <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"></input>
        </div>
        </center>
    )
}
