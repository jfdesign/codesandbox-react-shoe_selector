import React, { useState } from "react";
import Shoe from "./components/Shoe";
import Selectors from "./components/Selectors";
import Inventory from "./components/data/Inventory";

const allColors = Inventory.allColors;
const allSizes = Inventory.allSizes;

function App() {
  //Initialize State
  var [color, setColor] = useState(allColors[0]);
  var [availColors, setAvailColors] = useState(allColors);

  var [size, setSize] = useState(allSizes[0]);
  var [availSizes, setAvailSizes] = useState(allSizes);

  function handleSize(sizeSected) {
    //Updated the size
    setSize(sizeSected);

    //Find available colors in inventory from size selected
    let revisedColors = Inventory.bySize[sizeSected];

    //Update the list of available colors
    setAvailColors(revisedColors);

    //Set the first color in the new list
    setColor(revisedColors[0]);
  }

  function handleColor(colorSected) {
    //Update the color
    setColor(colorSected);

    //Find the available sizes in inventory from color selected
    let revisedSizes = Inventory.byColor[colorSected];

    //Update the list of available sizes
    setAvailSizes(revisedSizes);

    //Set the first size in the new list
    setSize(revisedSizes[0]);
  }

  function handleReset() {
    //Reset to orginal color size lists
    setAvailColors(allColors);
    setAvailSizes(allSizes);

    console.log(allColors[0]);
    //Reset initial values
    setColor(allColors[0]);
    setSize(allSizes[0]);
  }

  return (
    <div className="snearkerInvetoryC">
      <h1>Sneaker Inventory Selector</h1>

      <Selectors
        color={color}
        size={size}
        availColors={availColors}
        availSizes={availSizes}
        handleSize={handleSize}
        handleColor={handleColor}
        handleReset={handleReset}
      />

      <br />

      <Shoe color={color} />
    </div>
  );
}

export default App;

//Loading
//Transitions
