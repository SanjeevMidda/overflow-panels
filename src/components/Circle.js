import React, { useEffect, useState } from "react";

const Circle = ({ updateColor }) => {
  let randomColor = () => {
    let colorOne = Math.floor(Math.random() * 255);
    let colorTwo = Math.floor(Math.random() * 255);
    let colorThree = Math.floor(Math.random() * 255);

    return {
      one: colorOne,
      two: colorTwo,
      three: colorThree,
    };
  };

  const [colors, setColors] = useState(randomColor());

  useEffect(() => {
    setColors(randomColor());
  }, [updateColor]);

  let circleStyles = {
    background: `rgb(${colors.one}, ${colors.two}, ${colors.three})`,
  };

  return <div className="circle" style={circleStyles}></div>;
};

export default Circle;
