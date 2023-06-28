import React, { useState, useEffect } from 'react'

export default function Test(props) {
    const {elementData} = props
    // const [elementData, setElementData] = useState({
    //     element: {},
    //     loading: true,
    //     error: null
    // })

    // function fetchElementData() {
    //     fetch("http://127.0.0.1:5000/elements/random")
    //         .then(response => response.json())
    //         .then(element => {
    //             setElementData({element, loading: false})
    //         })
    //         .catch(error => {
    //             setElementData({error, loading: false})
    //         })
    // }

    // useEffect(() => {
    //     fetchElementData()
    // }, [])


    return (
        <div>
            {elementData.loading ? (<h1>Loading . . .</h1>) : (<h1>{elementData.element.element_name}</h1>)}
        </div>
    )
}
