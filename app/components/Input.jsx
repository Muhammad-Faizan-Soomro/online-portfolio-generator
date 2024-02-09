"use client";
import React from "react";
import { useId } from "react";

function Input({
  labelText,
  labelClassName,
  className,
  placeholder,
  disabled = false,
  type = "text",
  ariaDescribedBy,
  value,
  onChange,
  name,
  required = false,
}) {
  const id = useId();
  return (
    <div className="p-1 grid gap-y-1">
      {labelText && (
        <label
          htmlFor={id}
          className={`text-black pr-2 ${labelClassName}`}
        >
          {labelText}
        </label>
      )}
      <input
        className={`rounded-lg bg-gray-200 h-auto w-96 dark:text-black p-2 focus:bg-blue-100 border-black border-2 focus:border-orange-400 focus:border-2 outline-0 ${className}`}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        aria-describedby={ariaDescribedBy}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default Input;
