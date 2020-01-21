import React from "react";

export default function SelectSize({ availSizes, size, handleSize }) {
  function sizeOptions() {
    return availSizes.map(function(size, i) {
      return (
        <option value={size} key={i}>
          {size}
        </option>
      );
    });
  }

  function updateSize(e) {
    handleSize(e.target.value);
  }

  return (
    <>
      <span style={{ fontWeight: "bold" }}>Size:</span>&nbsp;
      <select value={size} onChange={updateSize}>
        {sizeOptions()}
      </select>
    </>
  );
}
