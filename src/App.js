import React from "react";
import "./App.css";

function App(props) {
  const { bankName, num, valid, name } = props;

  return (
    <div className="big-con">
      <div className="card">
        <h1 className="bank-name"> {bankName} </h1>
        <p className="card-num"> {num} </p>
        <p className="valid">Valid until: {valid} </p>
        <p className="holder-name"> {name} </p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <App
      bankName="Sparkasse"
      num="1234 6543 9876 8678"
      valid="12/2025"
      name="Ezekiel Mesfin"
    />
  );
}

export default Card;
