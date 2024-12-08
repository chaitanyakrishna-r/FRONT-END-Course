import React, { useEffect, useState } from "react";
import './RandomColor.css'

const RandomColor = () => {
  const [onColor, setOnColor] = useState("#ffffff");
  const [typeOfColor, setTypeOfColor] = useState("Hex");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  const handleHexColorGen = () => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += num[randomColorUtility(num.length)];
    }
    setOnColor(hex);
  };
  function handleRgbColorGen() {
  
    let r = randomColorUtility(256);
    let g = randomColorUtility(256);
    let b = randomColorUtility(256);
    const rgb = `rgb(${r},${g},${b})`;
    setOnColor(rgb);
  }

//   const handleColorGeneration = () => {
//     // Generate color based on the selected type
//     if (typeOfColor === "Rgb") {
//       handleRgbColorGen();
//     } else {
//       handleHexColorGen();
//     }
//   }

  useEffect(()=>{
    if(typeOfColor === "Rgb") handleRgbColorGen();
    else handleHexColorGen();
  },[typeOfColor]);
  
  return (
    <div
      style={{
        width:'100vw',
        height:'100vh',
        backgroundColor: onColor,
        margin:'0 auto',
        display:'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{
        display:'flex',
        gap:'10px'
      }}>
          <button className="btn" onClick={()=>{setTypeOfColor('Hex')}}>Hex color</button>
          <button className="btn" onClick={()=>{setTypeOfColor('Rgb')}}>RGB color</button>
          <button
           className="btn"
            onClick={() => {
                // handleColorGeneration()
                typeOfColor === "Hex" ? handleHexColorGen() : handleRgbColorGen();
            }}
            >
            Genarate Random Color
          </button>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>{typeOfColor === 'Rgb' ? "RGB Color": "Hex Color"}</h3>  
      <h1>{onColor}</h1>
      </div>
   
    </div>
  );
};

export default RandomColor;
