import React, { useState } from "react";

const Questions = () => {
  const onSelect = () => {
    console.log("Radio Button Changes");
  };
  return (
    <div className="questions">
      <h2 className="text-light">Question 1</h2>
      <ul>
        <li>
          <input
            type="radio"
            value={true}
            name="options"
            id="q1-option"
            onChange={onSelect()}
          />
          <label className="text-primary" htmlFor="q1-options">
            option
          </label>
          <div className="check checked"></div>
        </li>
      </ul>
    </div>
  );
};

export default Questions;
