import React from "react";

function Button({ text, className, type = "button", disabled = false }) {
  return (
    <button
      className={`w-[25rem] m-4 py-3 text-white font-bold bg-blue-400 rounded-full hover:bg-purple-400 ${className}`}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
