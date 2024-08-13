import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RockPaperScissorsComponent() {

    const [score, setScore] = useState(0)
    const [opponentScore, setOpponentScore] = useState(0)
    const [message, setMessage] = useState("First to five wins!")
    const opponentOption = "rock"

    function playerSelection(e) {
        if (opponentScore < 5 && score < 5) {
            game(e.target.value);
        } else return
    }

    function checkScore() {
        if (opponentScore === 5) {
            setMessage("You lost, the opponent has reached 5 points!")
        } else if (score === 5) {
            setMessage("You win! You have reached 5 points!")
        }
    }

    useEffect(() => {
        checkScore()
    }
    );

    function game(playerOption) {
        if (playerOption === opponentOption) {
            setMessage("You've Drawn!")
        } else if (playerOption === "rock" && opponentOption === "paper") {
            setOpponentScore(previousScore => previousScore + 1)
            setMessage("You've lost!")
        } else if (playerOption === "rock" && opponentOption === "scissors") {
            setScore(previousScore => previousScore + 1)
            setMessage("You've won!")
        } else if (playerOption === "scissors" && opponentOption === "rock") {
            setOpponentScore(previousScore => previousScore + 1)
            setMessage("You've lost!")
        } else if (playerOption === "scissors" && opponentOption === "paper") {
            setScore(previousScore => previousScore + 1)
            setMessage("You've won!")
        } else if (playerOption === "paper" && opponentOption === "rock") {
            setScore(previousScore => previousScore + 1)
            setMessage("You've won!")
        } else if (playerOption === "paper" && opponentOption === "scissors") {
            setOpponentScore(previousScore => previousScore + 1)
            setMessage("You've lost!")
        }
    }

    return (
        <Container>
            <Row className='pageRow'>
                <Col className='pageColumn leftColumn' md={6}>
                    <h1>
                        <button onClick={playerSelection} value={"rock"} className='pageTitle rockPaperScissorsBtn'>Rock</button>
                        <button onClick={playerSelection} value={"paper"} className='pageTitle rockPaperScissorsBtn'>Paper</button>
                        <button onClick={playerSelection} value={"scissors"} className='pageTitle rockPaperScissorsBtn'>Scissors</button>
                        <h5 className='bottomSpace'>Click an option to play</h5>
                    </h1>

                </Col>
                <Col className='pageColumn rightColumn' md={6}>
                    <h1 className='pageTitleXs'>Your Score: {score}</h1>
                    <h1 className='pageTitleXs'>Opponent Score: {opponentScore}</h1>
                    <h5>{message}</h5></Col>
            </Row>
        </Container>
    )
}

export default RockPaperScissorsComponent