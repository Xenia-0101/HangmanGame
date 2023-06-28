import React from 'react'
import { IoIosRefresh } from "react-icons/io"

export default function Heading(props) {
    const { isWinner, hasAttempts, playAgain } = props
    return (
        <span>
            <h1 style={{ display: "inline", color: isWinner ? "green" : (!hasAttempts && "red") }}>
                {isWinner ? "You Win" : (!hasAttempts && "You Lose")}
            </h1>
            {(isWinner || !hasAttempts) && (<button onClick={(() => playAgain())} style={{    fontSize: "1.5rem", background: "none", color: "black", border: "none", borderRadius: "50%",
    marginLeft: "25px",  cursor: "pointer"}}><IoIosRefresh /></button>)}
        </span>
    )
}
