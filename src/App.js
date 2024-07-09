import "./index.css";
import Circle from "./components/Circle";
import { useEffect, useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const [updateColor, setUpdateColor] = useState(0);

  let containerStyles = {
    width: `${clicked ? "1000px" : "50px"}`,
    height: `${clicked ? "1000px" : "50px"}`,
  };

  console.log(updateColor);
  return (
    <div className="App">
      <h3 onClick={() => setUpdateColor(updateColor + 1)}>new colors</h3>
      <div
        className="container"
        style={containerStyles}
        onClick={() => setClicked(!clicked)}
      >
        <div className="panelContainer">
          <Circle updateColor={updateColor}></Circle>
          <Circle updateColor={updateColor}></Circle>
          <Circle updateColor={updateColor}></Circle>
          <Circle updateColor={updateColor}></Circle>
          <Circle updateColor={updateColor}></Circle>
          <Circle updateColor={updateColor}></Circle>
          <Circle updateColor={updateColor}></Circle>
          <Circle updateColor={updateColor}></Circle>
          <Circle updateColor={updateColor}></Circle>
        </div>
      </div>
    </div>
  );
}

export default App;
