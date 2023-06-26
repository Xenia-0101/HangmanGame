import React from 'react'

export default function WordInformation(props) {
    const {name, symbol, number, origin} = props
  return (
    <div>{name} {origin}</div>
  )
}
