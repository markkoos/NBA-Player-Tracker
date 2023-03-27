import React, { useState } from `react`;
import Home from `./pages/Home`;
import Login from `./pages/Login`;
import Profile from `./pages/Profile`;
import NavBar from `./NavBar`;

export default function Container() {

    // use state for the current page (defaulted to home page)
    const [currentPage, setPage] = useState(``);

    // checks value of currentPage and returns imported component
    const renderComponent = () => {
        if (currentPage === ``) {
            return <Home />
        } 
        if (currentPage === `Login`) {
            return <Login />
        }
        if (currentPage === `Profile`) {
            return <Profile />
        }  
    };

    // function sets value of currentPage to what is selected on the NavBar
    const pageHandler = (page) => {
        setPage(page);
    };

    // returns NavBar with the component rendering functionality
    return (
        <div>
            <NavBar pageHandler={pageHandler} />
            {renderComponent()}
        </div>
    )
}