import React, { useState, useEffect } from "react";

const Input = ({
  label,
  type,
  name,
  value,
  handleInputChange,
  placeholder,
  handleEmptyInput,
  showAge,
}) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if(showAge){
      handleEmptyInput(value, setError);
    }
  }, [showAge, value]);


  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <p>{error}</p>
    </div>
  );
};

export default Input;
