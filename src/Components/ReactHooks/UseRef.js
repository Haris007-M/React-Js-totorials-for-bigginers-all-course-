




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

      <table>
        <tr>
          <th>Column1</th>
          <th>Column2</th>
          <th>Column3</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Haris</td>
          <td>25</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Aizaz</td>
          <td>20</td>
        </tr>
      </table>
    </div>
  );
}
