"use client";

import { useEffect, useState } from "react";
import RadioSelection from "./radio-selection";

function Input({ id, title, placeholder, type = "text", formError }) {
  const [userInputs, setUserInputs] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInputs(value);
    setError("");
  };
  const handleBlur = (e) => {
    const value = e.target.value.trim();
    if (!value) {
      setError("This field is required");
    } else if (/[%,#^½&!é]/.test(value)) {
      setError("Wrong format");
    } else if (id === "phone-number" && !/^[0-9+-]+$/.test(value)) {
      setError("Wrong format");
    } else if (id === "phone-number" && value.length < 6) {
      setError("Must be at least 6 characters");
    }
  };

  useEffect(() => {
    setError(formError);
  }, [formError]);

  return (
    <>
      {type === "radio" ? (
        <RadioSelection id={id} title={title} />
      ) : (
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center justify-between  mb-2">
            <label
              htmlFor={id}
              className={`text-xs font-bold transition-colors duration-300 ${
                error ? "text-error" : "text-black"
              }`}
            >
              {title}
            </label>
            {error && (
              <p className="text-error text-xs font-medium text-end">{error}</p>
            )}
          </div>
          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            className={`px-5 py-4 text-[14px] font-bold rounded-lg ring-1 outline-none placeholder:font-bold placeholder:text-[14px] transition-all duration-300 ${
              error
                ? "hover:ring-error ring-error focus:ring-error"
                : "hover:ring-primary-hover ring-off-white focus:ring-primary-index"
            }`}
            value={userInputs}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      )}
    </>
  );
}

export default Input;
