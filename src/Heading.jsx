import React from 'react'
import styles from "./Heading.module.css"

export default function Heading(props) {
    const { isWinner, hasAttempts, playAgain } = props
    return (
        <span>{isWinner

            ? <>
                <h1 style={{ color: "green", display: "inline" }}>You Won</h1>
                <button onClick={(() => playAgain())} className={styles.btn}>PlayAgain</button>
            </>
            : (!hasAttempts
                ? <>
                    <h1 style={{ color: "red", display: "inline" }}>You Lost</h1>
                    <button onClick={(() => playAgain())} className={styles.btn}>PlayAgain</button>
                </>
                : <h1 style={{ display: "inline" }}>Hangman Game</h1>)}
        </span>
    )
}
