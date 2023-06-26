import React, { useState } from 'react'
import styles from "./Keyboard.module.css"

export default function Keyboard(props) {
    const {guessedLetters, randomWord, hasAttempts,  isWinner  } = props
    const allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const gameFinished = isWinner || !hasAttempts
    
//     (!guessedLetters.includes(letter)
//     ? `${styles.btn}`
//     : `${styles.btn} ${randomWord.includes(letter)
//         ? styles.active
//         : styles.inactive}`
// )

    return (
        <div style={{ alignSelf: "stretch" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(auto, 70px)", gap: "0.5em" }}>

                {allLetters.map((letter, index) => (

                    <button disabled= {gameFinished || (guessedLetters.includes(letter))}
                        className={ `${styles.btn} ${gameFinished && styles.inactive} ${guessedLetters.includes(letter) && (randomWord.includes(letter) ? styles.active : styles.inactive) } 
                        `
                            
                        }
                        onClick={(event) => props.determineLetter(event)}
                        key={letter}
                        name={letter}
                    >

                        {letter}
                    </button>
                )
                )}
            </div>
        </div>
    )
}
