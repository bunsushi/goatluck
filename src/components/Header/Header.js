import React from "react";

const Header = props => (
    <div className="page-header">
        <div className="goat-pen">
            <img src="img/goat.png" alt="Happy Goat" />
        </div>
        <div id="word-bubble">
        <h3>{props.message}</h3>
        </div>
        <h1>Totes Ma Goats</h1>
    </div >
);

export default Header;