// import React, { useState, useEffect } from "react";

// const EmptyInputsError = () => {
//   const [errorDay, setErrorDay] = useState("");
//   const [errorMonth, setErrorMonth] = useState("");
//   const [errorYear, setErrorYear] = useState("");

//   const handleEmptyInput = (input, setError) => {
//     if (input === "") {
//       setError("This field is required");
//     } else {
//       setError("");
//     }
//   };

//   useEffect(() => {
//     handleEmptyInput(ageData.day, setErrorDay);
//     handleEmptyInput(ageData.month, setErrorMonth);
//     handleEmptyInput(ageData.year, setErrorYear);
//   }, [ageData]);

//   const emptyError = {
//     errorDay,
//     errorMonth,
//     errorYear,
//   };

//   return <div>{emptyError}</div>;
// };

// export default EmptyInputsError;
