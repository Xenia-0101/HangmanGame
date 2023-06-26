import React from 'react'

export default function Hangman(count) {
    const HEAD = (
        <div style={{ height: "50px", width: "50px", 
        border: "10px solid black", borderRadius: "50%", 
        position: "absolute", left: "155px", top: "50px"}} />
    )
    const BODY = (
        <div style={{ height: "100px", width: "10px", 
        background: "black", 
        position: "absolute", left: "185px", top: "120px"}} />
    )
    const LARM = (
        <div style={{ height: "80px", width: "10px", 
        background: "black", 
        position: "absolute", rotate: "120deg", transformOrigin: "top left", 
        left: "190px", top: "160px"}} />
    )
    const RARM = (
        <div style={{ height: "80px", width: "10px", 
        background: "black", 
        position: "absolute", rotate: "-120deg", transformOrigin: "top left", 
        left: "195px", top: "170px"}} />
    )
    const LLEG = (
        <div style={{ height: "80px", width: "10px", 
        background: "black", 
        position: "absolute", rotate: "30deg", transformOrigin: "top left", 
        left: "185px", top: "210px"}} />
    )
    const RLEG = (
        <div style={{ height: "80px", width: "10px", 
        background: "black", 
        position: "absolute", rotate: "-30deg", transformOrigin: "top right", 
        left: "185px", top: "210px"}} />
    )
    
    const hangmanList = [HEAD, BODY, LARM, RARM, LLEG, RLEG]
    return (
        <div style={{position: "relative"}}>

        {hangmanList.slice(0,count.count)}
        <div style={{height: "50px", width: "10px", background: "black",position: "absolute", marginLeft: "185px"}} />
        <div style={{height: "10px", width: "100px", background: "black", marginLeft: "95px"}} />
        <div style={{height: "400px", width: "10px", background: "black", marginLeft: "95px"}} />
        <div style={{height: "10px", width: "200px", background: "black"}} />




        </div>



    )
}
