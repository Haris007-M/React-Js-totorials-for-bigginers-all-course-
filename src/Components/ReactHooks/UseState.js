import React, { useEffect, useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(() => {
    return 0;
  });
  const [multiply, setMultiply] = useState("")
  const [theme, setTheme] = useState(() => {
    return ("Blue");
  });
  const countingcolor = document.querySelector(".countingcolor")


  function increament() {
    setCount((PrevCount) => PrevCount + 1);
    setTheme("Blue")
    countingcolor.style.background = "blue"
  }
  function decreament() {
    setCount((PrevCount) => PrevCount - 1);
    setTheme("Red")
    countingcolor.style.background = "red"
  }
  
  useEffect(() => {
      setMultiply(() => {
        return count * -1
        })
  },[count])
  
  return (
    <div>
      <button type="" onClick={decreament}>
        -
      </button>
      <span className="countingcolor">{count}</span>
      <span >{theme}</span>
      <button type="" onClick={increament}>
        +
      </button>
      <span className="countingcolor">{multiply}</span>
    </div>
  );
}
