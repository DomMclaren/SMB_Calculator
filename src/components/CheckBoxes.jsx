import React from "react";

const CheckBoxes = ({
  name,
  checked,
  setChecked,
  disabled,
  biCheck,
  setBIcheck,
}) => {
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: disabled ? "not-allowed" : "pointer",
        marginTop: "10px",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        style={{
          appearance: "none",
          width: "20px",
          height: "20px",
          border: `2px solid ${disabled ? "#aaa" : "#007bff"}`,
          borderRadius: "5px",
          display: "grid",
          placeItems: "center",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "all 0.2s ease-in-out",
          position: "relative",
          backgroundColor: checked ? "#007bff" : "transparent",
        }}
      />
      <label
        htmlFor={name}
        style={{
          fontWeight: "bold",
          display: "block",
          fontSize: "clamp(14px, 2vw, 20px)",
          color: disabled ? "#777" : "black", // Dim label if disabled
        }}
      >
        {name}
      </label>

      {/* Custom Checkmark using ::after */}
      <style>
        {`
          input[type="checkbox"]:checked::after {
            content: "✔";
            font-size: 18px;
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          input[type="checkbox"]:hover {
            border-color: ${disabled ? "#aaa" : "#0056b3"};
          }

          input[type="checkbox"]:focus {
            outline: ${disabled ? "none" : "3px solid rgba(0, 123, 255, 0.5)"};
          }
        `}
      </style>
    </div>
  );
};

export default CheckBoxes;
