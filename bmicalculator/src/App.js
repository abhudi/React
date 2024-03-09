import React, { useMemo, useState } from "react";
import './App.css';
const App = () => {

  const [height,setHeight]  = useState(180);
  const [weight,setWeight]  = useState(70);


  function onWeightChange(event){
    setWeight(event.target.value);
  }

  function onHeightChange(event){
    setHeight(event.target.value);
  }


  const output = useMemo(() => {
    const calcluateHeight = height /100;

    return (weight/(calcluateHeight*calcluateHeight)).toFixed(1)
  },[weight,height] );

  return (
    <main>
      <h1>Project : BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight:{weight}kg</p>
        <input onChange={onWeightChange}
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
        ></input>
        <p className="slider-output">Height:{height}cm</p>
        <input onChange={onHeightChange}
        className="input-slider"
        type="range"
        min="140"
        max="220"></input>
        <div className="output-section">
          <p>Your BMI is </p>
          <p className="output">{output}</p>
        </div>
      </div>
    </main>
  );
};

export default App;
