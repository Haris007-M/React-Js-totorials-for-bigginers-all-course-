import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const FiltedItems = text.filter(item => {
    return item.toLowerCase().includes(search.toLowerCase());
});

  const handleOnClick1 = () => {
    setText(text.toUpperCase())
  }

  const handleOnClick2 = () => {
    setText(text.toLowerCase())
  }

  const searchholder = (e) => {
    setSearch(e.target.value)
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
            <h3>Time taking per Words</h3>
            <p>taking {0.08 * text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text}</p>

            <h3>Search Word</h3>
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." value={search} onChange={searchholder} />

            <div className="col-4">
              <h2>Item : </h2>
              {FiltedItems.map((item) => (
                <div>{item}</div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
