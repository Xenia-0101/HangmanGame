import React, { useEffect, useState } from 'react'
import Hangman from './Hangman'
import Word from './Word'
import Keyboard from './Keyboard'
import Heading from './Heading'
import WordInformation from './WordInformation'

import { words, periodicTable } from './ListOfWords'

export default function App() {
  const [element, setElement] = useState({})

  // const randomWordInit = words[Math.floor(Math.random() * words.length)].split("")
  const randomWordInit = periodicTable[Math.floor(Math.random() * periodicTable.length)].element_name.toLowerCase().split("")

  const [randomWord, setRandomWord] = useState(() => { return (randomWordInit) })
  const [guessedLetters, setGuessedLetters] = useState([])
  const wrongLetters = guessedLetters.filter(letter => !randomWord.includes(letter))


  function determineLetter(event) {
    const { name } = event.target
    setGuessedLetters((currentLetters) => [...currentLetters, name])
  }

  function playAgain() {
    setRandomWord(() => {
      return (
        randomWordInit
      )
    })
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
      <div style={{ display: "flex", flexFlow: "column", gap: "1rem", alignItems: "center", justifyContent: "center" }}>
        <WordInformation word={randomWord} />
      </div>
    </div>
  )
}
