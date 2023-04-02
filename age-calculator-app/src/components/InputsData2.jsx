import React, { useEffect, useState } from "react";
import ArrowButton from "./ArrowButton";
import Input from "./Input";

const InputsData = ({ ageData, setAgeData, setShowAge, showAge }) => {


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAgeData((prevData) => ({ ...prevData, [name]: parseInt(value) }));
  };

  const handleEmptyInput = (input, setError) => {
    if (input === false ||  isNaN(input) ) {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  console.log(ageData)


  return (
    <div className="inputs-container">
      <Input
        label={"D A Y"}
        type={"number"}
        name="day"
        value={ageData.day}
        handleInputChange={handleInputChange}
        handleEmptyInput={handleEmptyInput}
        placeholder={"DD"}
        showAge={showAge}
      />
      <Input
        label={"M O N T H"}
        type={"number"}
        name="month"
        value={ageData.month}
        handleInputChange={handleInputChange}
        handleEmptyInput={handleEmptyInput}
        placeholder={"MM"}
        showAge={showAge}
      />
      <Input
        label={"Y E A R"}
        type={"number"}
        name="year"
        value={ageData.year}
        handleInputChange={handleInputChange}
        handleEmptyInput={handleEmptyInput}
        placeholder={"YYYY"}
        showAge={showAge}
      />
      <div className="break">
        <div>
        <button onClick={() => setShowAge(true)}>
          <ArrowButton />
        </button>
        </div>
      </div>
    </div>
  );
};

export default InputsData;
