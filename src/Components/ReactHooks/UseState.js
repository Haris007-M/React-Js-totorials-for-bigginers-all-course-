import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(() => {
    return 1;
  });
  const [theme, setTheme] = useState(() => {
    return ("Blue");
  });

  function increament() {
    setCount((PrevCount) => PrevCount + 1);
    setTheme("Blue")
  }
  function decreament() {
    setCount((PrevCount) => PrevCount - 1);
    setTheme("Red")
  }
  return (
    <div>
      <button type="" onClick={decreament}>
        -
      </button>
      <span>{count}</span>
      <span>{theme}</span>
      <button type="" onClick={increament}>
        +
      </button>
    </div>
  );
}
