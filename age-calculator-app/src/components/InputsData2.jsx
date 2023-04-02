import React, { useState } from "react";
import ArrowButton from "./ArrowButton";
import Input from "./Input";

const InputsData = ({ ageData, setAgeData, setShowAge, showAge }) => {
  const [invalidDayError, setInvalidDayError] = useState(false);
  const [invalidMonthError, setInvalidMonthError] = useState(false);
  const [invalidYearError, setInvalidYearError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAgeData((prevData) => ({ ...prevData, [name]: parseInt(value) }));
  };

  const handleEmptyInput = (input, setError) => {
    if (input === false || isNaN(input)) {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  const handleInvalidData = (input, errorName) => {
    if (errorName === "day" && input > 31) {
      setInvalidDayError("Must be a valid");
    } else {
      setInvalidDayError(false);
    }
    if (errorName === "month" && input > 12) {
      setInvalidMonthError("Must be a valid");
    } else {
      setInvalidMonthError(false);
    }
    if (errorName === "year" && input > 2023) {
      setInvalidYearError("Must be in the past");
    } else {
      setInvalidYearError(false);
    }
  };

  return (
    <div className="inputs-container">
      <Input
        label={"D A Y"}
        type={"number"}
        name="day"
        errorName="day"
        value={ageData.day}
        handleInputChange={handleInputChange}
        handleEmptyInput={handleEmptyInput}
        handleInvalidData={handleInvalidData}
        placeholder={"DD"}
        showAge={showAge}
        invalidError={invalidDayError}
      />
      <Input
        label={"M O N T H"}
        type={"number"}
        name="month"
        errorName="month"
        value={ageData.month}
        handleInputChange={handleInputChange}
        handleEmptyInput={handleEmptyInput}
        handleInvalidData={handleInvalidData}
        placeholder={"MM"}
        showAge={showAge}
        invalidError={invalidMonthError}
      />
      <Input
        label={"Y E A R"}
        type={"number"}
        name="year"
        errorName="year"
        value={ageData.year}
        handleInputChange={handleInputChange}
        handleEmptyInput={handleEmptyInput}
        handleInvalidData={handleInvalidData}
        placeholder={"YYYY"}
        showAge={showAge}
        invalidError={invalidYearError}
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
