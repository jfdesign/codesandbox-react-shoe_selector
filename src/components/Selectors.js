import React from "react";
import SelectSize from "./SelectSize";
import SelectColor from "./SelectColor";

export default function Selecors({
  color,
  size,
  availColors,
  availSizes,
  handleSize,
  handleColor,
  handleReset
}) {
  function resetSelections(e) {
    e.preventDefault();

    handleReset();
  }

  return (
    <div>
      <SelectSize availSizes={availSizes} size={size} handleSize={handleSize} />
      &nbsp; &nbsp;
      <SelectColor
        availColors={availColors}
        color={color}
        handleColor={handleColor}
      />
      &nbsp; &nbsp;
      <button onClick={resetSelections}>Reset</button>
      <br />
      <br />
      {color !== "" ? (
        <>
          <span style={{ fontWeight: "bold" }}>Selected:</span>{" "}
          <span style={{ textTransform: "capitalize" }}>{color}</span> Shoe Size{" "}
          {size}
          <br />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
