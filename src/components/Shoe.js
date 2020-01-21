import React from "react";

export default function Shoe({ color }) {
  return (
    <div
      className="shoeC"
      style={{ background: color, width: "300px", height: "200px" }}
    >
      {
        /*color !== "" ? (
            <span>Shoe is {color}</span>
            ) : (
              '' 
            )
          */

        <img src={"./images/" + color + ".jpg"} />
      }
    </div>
  );
}
