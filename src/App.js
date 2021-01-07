import React, { useState, useEffect } from "react";
import "./App.css";

function Rule() {
  const [advice, setAdvice] = useState(" ");
  useEffect(() => {
    Advice();
  }, []);
  function Advice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice))
      .catch((error) => console.log(error));
  }
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button " onClick={Advice}>
          <span>More advice</span>
        </button>
      </div>
    </div>
  );
}

export default Rule;
