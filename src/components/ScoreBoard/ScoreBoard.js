import React from "react";

const ScoreBoard = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li>{props.message}</li>
            <li>Score: {props.currentScore} | Top Score: {props.highScore}</li>
        </ul>
    </div>
);

export default ScoreBoard;