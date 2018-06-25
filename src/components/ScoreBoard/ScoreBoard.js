import React from "react";
import { Row, Column } from "../Bootstrap";

const ScoreBoard = props => (
    <div className="scoreboard">
        <Row>
            <Column size="col-md-5">
                <div className="score-box">
                    <h1 className="score">Score :</h1> <h2>{props.currentScore}</h2>
                </div>
            </Column>
            <Column size="col-md-7">
                <div className="score-box">
                    <h1 className="score">High Score :</h1> <h2>{props.highScore}</h2>
                </div>
            </Column>
        </Row>
    </div>
);

export default ScoreBoard;