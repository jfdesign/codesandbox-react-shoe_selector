import React from "react";

export default function SelectColor({ availColors, color, handleColor }) {
  function colorOptions() {
    return availColors.map(function(colorName, i) {
      return (
        <option value={colorName} key={i}>
          {colorName}
        </option>
      );
    });
  }

  function updateColor(e) {
    handleColor(e.target.value);
  }

  return (
    <>
      <span style={{ fontWeight: "bold" }}>Color:</span>&nbsp;
      <select value={color} onChange={updateColor}>
        {colorOptions()}
      </select>
    </>
  );
}
