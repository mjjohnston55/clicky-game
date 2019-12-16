import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header-div">
        <div className="title-div">
            {props.children}
        </div>
        <div className="scores-div">
            Score: {props.score} Highscore: {props.highscore}
        </div>
    </div>
);

export default Header;