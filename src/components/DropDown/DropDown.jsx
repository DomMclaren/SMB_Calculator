import React from "react";

const DropDown = ({ plan, setPlan }) => {
  const handleChange = (event) => {
    setPlan(event.target.value);
  };
  return (
    <div>
      <select value={plan} onChange={handleChange}>
        <option value="Start5G">Start 5G</option>
        <option value="Plus5G">Plus 5G</option>
        <option value="Pro5G">Pro 5G</option>
      </select>
    </div>
  );
};

export default DropDown;
