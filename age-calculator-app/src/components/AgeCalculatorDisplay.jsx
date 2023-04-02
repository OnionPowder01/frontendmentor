import React, { useState, useEffect } from "react";

const AgeCalculatorDisplay = ({ ageData, showAge }) => {
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const { day, month, year } = ageData;
    if(day && month && year) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears -= 1;
      ageMonths += 12;
    }

    if (ageDays < 0) {
      const daysInMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      ageMonths -= 1;
      ageDays += daysInMonth;
    }

    const completeAge = {
      ageYears,
      ageMonths,
      ageDays,
    };

    setAge(completeAge)

  }
  else {
    setAge(false)
  }
  };

  useEffect(() => {
      calculateAge();
      // eslint-disable-next-line
  }, [ageData]);


  return (
    <div className="display-age-container">
      <div className="years-container">
        <span>{`${showAge && age ? age.ageYears : "- -"}`} </span>
        years
      </div>
      <div className="months-container">
        <span>{`${showAge && age ? age.ageMonths : "- -"}`} </span>
        months
      </div>
      <div className="days-container">
        <span>{`${showAge && age ? age.ageDays : "- -"}`} </span>
        days
      </div>
    </div>
  );
};

export default AgeCalculatorDisplay;
