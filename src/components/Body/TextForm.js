import React, { useState, useEffect } from "react";

export default function TextForm(props) {
  //State and hooks..
  const [data, setData] = useState(
    "Enter the text here to convert in the UpperCase."
  );
  // text="Hello..."; Not allowed

  // useEffect hooks
  // useEffect(() => {
  //   setData("Enter the text here");
  // }, []);

  function handleOnClick1() {
    console.log("UpperCase Button is clicked..");
    setData(data.toUpperCase());
  }
  function handleOnClick2() {
    console.log("LowerCase Button is clicked..");
    setData(data.toLowerCase());
  }
  function handleOnChange(e) {
    console.log(e.target.value);
    setData(e.target.value);
  }

  return (
    <div
      className="container my-3"
      style={{
        width: "85%",
        padding: "15px",
        // textAlign: "center",
        backgroundColor: "#80808014",
      }}
    >
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h3>{props.heading}</h3>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          value={data}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleOnClick1}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary" onClick={handleOnClick2}>
        Convert to LowerCase
      </button>
    </div>
  );
}
