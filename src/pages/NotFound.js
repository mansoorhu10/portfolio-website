import React from "react";
import NotFoundLogo from "../assets/404-logo.png";

const NotFound = () => {

    return (
        <div className="not-found">
            <img className="error-logo" src={NotFoundLogo} alt="Error 404 Logo" />
            <h2>The page cannot be found</h2>
            
            <br />

            <p className="error-text">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                <hr />
                Please try the following: 
                <br />
                <ul>
                    <li>If you typed the page address in the Address bar, make sure that it is spelled correctly.</li>
                    <li>Open the home page using the navigation bar below, and then look for the information you want.</li>
                    <li>Click the Back button to try another link.</li>
                </ul>
                <br />

                HTTP 404 - File not found
                <br />
                Mansoor Syed

            </p>
        </div>
    );

}

export default NotFound;