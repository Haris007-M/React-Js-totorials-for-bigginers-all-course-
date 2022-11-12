import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [state, setState] = useState("");
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = state;
  }, [state]);

  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <div>
        My name is {state} and is used to be {prevRef.current}
      </div>
    </div>
  );
}
