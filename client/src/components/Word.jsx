import React from 'react'

export default function Word(props) {
    const { word: wordLetters, hasAttempts } = props

    return (
        <div style={{ display: "flex", gap: "1rem", textTransform: "uppercase", fontFamily: "monospace", fontSize: "4.5rem" }}>

            {wordLetters.map((letter, index) => (
                <span style={{ borderBottom: "5px solid black" }} key={index}>
                    <span style={{
                        visibility: hasAttempts
                            ? (props.guessedLetters.includes(letter)
                                ? "visible"
                                : "hidden")
                            : "visible",
                        color:
                            !hasAttempts
                            && (!props.guessedLetters.includes(letter)
                                && "red")
                    }}>
                        {letter}
                    </span>
                </span>))}

        </div>
    )
}
