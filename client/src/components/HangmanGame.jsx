import React, { useEffect, useState } from 'react'
import Hangman from '../components/Hangman'
import Word from '../components/Word'
import Keyboard from '../components/Keyboard'
import Heading from '../components/Heading'
import Element from '../components/Element'

export default function HangmanGame(props) {
    const { word, refresh } = props
    const { element_name } = word

    const randomWord = element_name.toLowerCase().split("")
    const [guessedLetters, setGuessedLetters] = useState([])
    const wrongLetters = guessedLetters.filter(letter => !randomWord.includes(letter))


    function determineLetter(event) {
        const { name } = event.target
        setGuessedLetters((currentLetters) => [...currentLetters, name])
    }

    function playAgain() {
        refresh()

        setGuessedLetters(() => [])
    }
    const isWinner = randomWord.every((letter) => (guessedLetters.includes(letter)))
    const hasAttempts = wrongLetters.length < 6

    useEffect(() => {
        console.log(randomWord)
    })

    useEffect(() => {

        isWinner ? console.log("winner") : (hasAttempts ? console.log("continue") : console.log("loser"))

    })

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", width: "100vw" }}>



            <div style={{ display: "flex", flexFlow: "column", gap: "1rem", alignItems: "center", justifyContent: "center", width: "75vw", minWidth: "400px", maxWidth: "800px" }}>


                <Heading isWinner={isWinner} hasAttempts={hasAttempts} playAgain={playAgain} />
                <Hangman count={wrongLetters.length} />
                <Word word={randomWord} guessedLetters={guessedLetters} hasAttempts={hasAttempts} />
                <Keyboard guessedLetters={guessedLetters} randomWord={randomWord} determineLetter={determineLetter} hasAttempts={hasAttempts} isWinner={isWinner} />

            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                {(isWinner || !hasAttempts) && <Element wordData={word} />}
            </div>
        </div>
    )
}
