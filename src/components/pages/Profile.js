import React from "react";

export default function Profile() {
    return (
        <div>
            <br></br>
            <div class="jumbotron jumbotron-fluid">
                <div class="container-fluid">
                <p class="pfp"><img class="rounded-circle" alt="avatar1" src="http://via.placeholder.com/250x250" /> Render Username Here</p>
                <hr class="my-4"></hr>
                </div>
                
                <div class="card-container">
                {/* ------------------------------------Rendering Each Card---------------------------------- */}
                    <div class="card">
                        <img class="card-img-top" src="http://via.placeholder.com/150x150" alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Player Name</h5>
                            <p class="card-text">Example text</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">PPG: </li>
                            <li class="list-group-item">RPG: </li>
                            <li class="list-group-item">APG: </li>
                        </ul>
                    </div>
                {/* ------------------------------------Rendering Each Card---------------------------------- */}
                    <div class="card">
                        <img class="card-img-top" src="http://via.placeholder.com/150x150" alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Player Name</h5>
                            <p class="card-text">Example text</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">PPG: </li>
                            <li class="list-group-item">RPG: </li>
                            <li class="list-group-item">APG: </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

