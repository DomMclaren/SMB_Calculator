import React from "react";

const CheckBoxes = ({ name, checked, setChecked }) => {
  const handleChange = (event) => {
    setChecked(event.target.checked); // Update parent state
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      <input
        type="checkbox"
        id={name}
        checked={checked} // Controlled by parent
        onChange={handleChange}
        style={{
          appearance: "none",
          width: "20px",
          height: "20px",
          border: "2px solid #007bff",
          borderRadius: "5px",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          position: "relative",
          backgroundColor: checked ? "#007bff" : "transparent", // Use parent state
        }}
      />
      <label
        htmlFor={name}
        style={{
          fontWeight: "bold",
          display: "block",
          marginBottom: "5px",
          fontSize: "clamp(14px, 2vw, 20px)",
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
            border-color: #0056b3;
          }

          input[type="checkbox"]:focus {
            outline: 3px solid rgba(0, 123, 255, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default CheckBoxes;
