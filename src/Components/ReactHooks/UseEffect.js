import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [state, setState] = useState(["Posts"]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
  .then(response => response.json())
  .then(json => setItems(json))
  }, [state]);

  return (
    <>
      <div>
        <button
          type=""
          onClick={() => {
            setState("Posts");
          }}
        >
          Post
        </button>
        <button
          type=""
          onClick={() => {
            setState("Users");
          }}
        >
          User
        </button>
        <button
          type=""
          onClick={() => {
            setState("Comments");
          }}
        >
          Comment
        </button>
      </div>
      <h1>{state}</h1>

      {
        (items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>;
        }))
      }
    </>
  );
}
