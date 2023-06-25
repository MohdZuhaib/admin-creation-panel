import React, { useState } from "react";
import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker";
import { setCurrentColor } from "../../Slices/colorSlice";
import { store } from "../../store";

const GradientPicker = () => {
  const [color, setColor] = useState(
    "linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)"
  );
  const {
    gradientType,
    setLinear,
    setRadial,
    addPoint,
    deletePoint,
    degrees,
    setDegrees,
    setPointLeft,
    currentLeft,
    selectedPoint,
  } = useColorPicker(color, setColor);
  const props = {
    hidePresets: true,
    hideOpacity: true,
    hideEyeDrop: true,
    isGradient: true,
    hideInputs: true,
    gradientType: "radial-",
    // hideControls: true,
    // hideAdvancedSliders: true,
    hideColorGuide: true,
    // hideInputType: true,
    hideColorTypeBtns: true,
  };
  const handleColor = (color) => store.dispatch(setCurrentColor(color));
  const colorHandler = (e) => {
    setColor(e);
    handleColor(color);
  };
  return (
    <>
      <button onClick={setLinear}>Linear</button>
      <button onClick={setRadial}>Radial</button>
      {gradientType === "linear-gradient" && (
        <input value={degrees} onChange={(e) => setDegrees(e.target.value)} />
      )}
      <input
        value={currentLeft}
        onChange={(e) => setPointLeft(e.target.value)}
      />
      <button onClick={() => addPoint(50)}>Add Color</button>
      <button onClick={() => deletePoint(selectedPoint)}>Delete Color</button>
      <ColorPicker
        {...props}
        value={color}
        onChange={colorHandler}
        hideControls={true}
      />
    </>
  );
};

export default GradientPicker;
