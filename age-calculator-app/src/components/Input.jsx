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
  errorName,
  invalidError,
  handleInvalidData,
}) => {
  const [errorEmpty, setErrorEmpty] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (showAge) {
      handleEmptyInput(value, setErrorEmpty);
    }
    // eslint-disable-next-line
  }, [showAge, value]);

  useEffect(() => {
    handleInvalidData(value, errorName, invalidError);
    if (invalidError) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    // eslint-disable-next-line
  }, [value, errorName, invalidError]);

  console.log(isError);

  return (
    <div
      className={
        isError || errorEmpty ? "input-container error" : "input-container"
      }
    >
      <label className={isError || errorEmpty ? "label label-error" : "label"}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <p className="para-error">{errorEmpty}</p>
      <p className="para-error">
        {invalidError ? `${invalidError} ${errorName}` : ""}
      </p>
    </div>
  );
};

export default Input;
