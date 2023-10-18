import React, { useState } from "react";

export default function TextForm(props) {
  //State and hooks..
  const [data, setData] = useState(
    "Enter the text here to convert in the UpperCase or the LowerCase."
  );
  // text="Hello..."; Not allowed
  //We need this hooks because we can not directly use the setData() method outside...
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
  const handleOnClick3 = () => {
    console.log("Clear text button is clicked.");
    setData("");
  };
  function handleOnChange(e) {
    //console.log(e.target.value);
    setData(e.target.value);
  }

  return (
    <div
      className="container my-3"
      style={{
        width: "85%",
        padding: "15px",
        // textAlign: "center",
        backgroundColor: props.theme ? "#212529" : "#80808014",
        color: props.theme ? "white" : "#212529",
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
          style={{
            backgroundColor: props.theme ? "rgb(218, 230, 221)" : "white",
            color: props.theme ? "black" : "#212529",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary m-1" onClick={handleOnClick1}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary m-1" onClick={handleOnClick2}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary m-1" onClick={handleOnClick3}>
        Clear Text
      </button>
      <div className="summary my-3">
        <h4>Text Summary</h4>
        <p>
          Total words : {data.split(" ").filter((e) => e.length > 0).length}
          <br />
          Total Characters : {data.length}
          <br />
          Total Read time :{" "}
          {0.008 * data.split(" ").filter((e) => e.length > 0).length} minute
          reads.
          {/* Because A person can read 125 words in 1 minute. */}
        </p>
      </div>
    </div>
  );
}
