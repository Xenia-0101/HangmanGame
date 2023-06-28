import React, { useEffect, useState } from 'react'

import HangmanGame from '../components/HangmanGame'

export default function App() {
  // ------------------------------------ elements database --------------------------------------------- //
  
  const [elementData, setElementData] = useState({
    element: {},
    loading: true,
    error: null
  })
  const { element, loading, error } = elementData
  function fetchElementData() {
    fetch("http://127.0.0.1:5000/elements/random")
    .then(response => response.json())
    .then(element => {
      setElementData({ element, loading: false })
    })
    .catch(error => {
      setElementData({ error, loading: false })
    })
  }
  
  useEffect(() => {
    fetchElementData()
  }, [])
  
  // ---------------------------------- *** end *** -------------------------------------------- //
  
  
  return (
    <div>

      {loading ? <h1>Loading . . .</h1> : error ? <h1>{error}</h1> : <HangmanGame word={element} refresh={fetchElementData} />}

    </div>
  )
}
