import React from "react";

export default function Profile() {
    return (
        <div>
            <br></br>
            <div className="jumbotron jumbotron-fluid">
                <div className="hero container-fluid">
                <p className="pfp"><img className="rounded-circle" alt="avatar1" src="http://via.placeholder.com/250x250" /> Render Username Here</p>
                <hr className="my-4"></hr>
                </div>
                
                <div className="card-container">
                {/* ------------------------------------Rendering Each Card---------------------------------- */}
                    <div className="card playerCard">
                        <img className="card-img-top" src="http://via.placeholder.com/150x150" alt="player card"></img>
                        <div className="card-body">
                            <h5 className="card-title">Player Name</h5>
                            <p className="card-text">Example text</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">PPG: </li>
                            <li className="list-group-item">RPG: </li>
                            <li className="list-group-item">APG: </li>
                        </ul>
                    </div>
                {/* ------------------------------------Rendering Each Card---------------------------------- */}
                    <div className="card playerCard">
                        <img className="card-img-top" src="http://via.placeholder.com/150x150" alt="player card"></img>
                        <div className="card-body">
                            <h5 className="card-title">Player Name</h5>
                            <p className="card-text">Example text</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">PPG: </li>
                            <li className="list-group-item">RPG: </li>
                            <li className="list-group-item">APG: </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

