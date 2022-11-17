import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("enter text here");

 const handleOnClick = () => {
    let textconvert = text.toUpperCase()
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
              <button className="btn btn-primary my-2" onClick={handleOnClick}>UpperCase</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
