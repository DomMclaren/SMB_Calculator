import React, { useState } from "react";

const CheckBox = (prop) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked); // Update state based on checked property
  };
  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        {prop.name}
      </label>
    </div>
  );
};

export default CheckBox;
