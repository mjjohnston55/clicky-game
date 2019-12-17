import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header-div">
        <div className="title-div">
            It's Always Clicky in Philadelphia
        </div>
        <div className="scores-div">
            Score: {props.score} High Score: {props.highscore}
        </div>
    </div>
);

export default Header;