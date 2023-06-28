import React from 'react'

export default function Element(props) {
  const { atomic_number, element_name, element_symbol, name_origin } = props.wordData


  const elementGroups = {
    nonMetal: { elements: [1, 6, 7, 8, 9, 15, 16, 17, 34, 35, 53, 85, 117], color: "#ffffb8" },
    nobleGas: { elements: [2, 10, 18, 36, 54, 86, 118], color: "#ffe6c1" },
    alkaliMetal: { elements: [3, 11, 19, 37, 55, 87], color: "#ffc6c6" },
    alkalineEarthMetal: { elements: [4, 12, 20, 38, 56, 88], color: "#d3d3ff" },
    metalloid: { elements: [5, 14, 32, 33, 51, 52, 84], color: "#e2efc0" },
    postTransitionMetal: { elements: [13, 31, 49, 50, 81, 82, 83, 113, 114, 115, 116], color: "#c7ffc7" },
    transitionMetal: { elements: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 72, 73, 74, 75, 76, 77, 78, 79, 80, 104, 105, 106, 107, 108, 109, 110, 111, 112], color: "#c1e0ff" },
    lanthanide: { elements: [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71], color: "#afffff" },
    actinide: { elements: [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], color: "#c5ffec" }
  }

  function getColor(A) {
    for (const [key, value] of Object.entries(elementGroups)) {
      if (value.elements.includes(Number(A))) {return(value.color) }
    }}


  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", paddingTop: "20px" }}>
      <div style={{
        display: "flex", flexFlow: "column", justifyContent: "space-around", alignItems: "center",
        width: "131px", height: "141px", border: "1px solid black", padding: "10px 3px", backgroundColor: getColor(atomic_number)}}>
        <div style={{ alignSelf: "flex-start", fontSize: "1.35rem" }}> {atomic_number} </div>
        <div style={{ fontSize: "3.5rem" }}> {element_symbol}  </div>
        <div style={{ fontSize: "1.35rem" }}> {element_name} </div>

      </div>
      <div style={{ width: "300px", fontSize: "1.35rem", lineHeight: "2rem" }}>
        <span style={{ fontWeight: "bold", fontSize: "0.85em" }}>Origin of the name:</span> <br/>
        {name_origin}
      </div>

    </div>
  )
}
