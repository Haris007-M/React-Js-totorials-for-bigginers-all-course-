import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("enter text here");

 const handleOnClick1 = () => {
    let textconvert = text.toUpperCase()
    setText(textconvert)
  }
  const handleOnClick2 = () => {
    let textconvert = text.toLowerCase()
    setText(textconvert)
  }

 const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <h1>ENTER TEXT TO CONVERT TO UPPERCASE</h1>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                value={text}
                onChange={handleOnChange}
                rows="6"></textarea>
              <button className="btn btn-primary my-2 mx-1" onClick={handleOnClick1}>UpperCase</button>
              <button className="btn btn-primary my-2 mx-1" onClick={handleOnClick2}>LowerCase</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Words and Letters</h3>
            <p>{text.split(" ").length} words and {text.length} letters</p>
            <h3>Time taking</h3>
            <p>taking {0.08*text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
