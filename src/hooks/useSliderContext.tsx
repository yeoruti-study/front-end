import React from "react";
import { SliderContext } from "../components/deprecated/SubjectSlider";

const useSliderContext = () => {
  const context = React.useContext(SliderContext);
  if (!context) {
    throw new Error(
      "Slider 컴파운드 컴포넌트는 Slider 밖에서 렌더링될 수 없다"
    );
  }
  return context;
};
export default useSliderContext;
