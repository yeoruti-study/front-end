import React, { useState } from "react";
import styled from "styled-components";
import SlideButton from "./SlideButton";
import SubjectCell from "./SubjectCell";
import { DataType } from "../containers/SubjectContainer";

type SliderProps = {
  slides: Array<DataType>;
  width: number;
};

const SubjectSlider: React.FC<SliderProps> = (props) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.5,
  });

  const { translate, transition, activeIndex } = state;
  const { slides, width } = props;

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * width,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * width,
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width,
    });
  };

  return (
    <SliderWrapper>
      <ButtonWrapper>
        <SlideButton
          direction="left"
          onClick={prevSlide}
          disable={activeIndex <= 0}
        />
        <SlideButton
          direction="right"
          onClick={nextSlide}
          disable={activeIndex >= slides.length - 1}
        />
      </ButtonWrapper>
      <SliderContent
        translateVal={translate}
        transitionVal={transition}
        widthVal={width * slides.length}
      >
        {props.slides.map((slide, i: number) => (
          // <Slide key={slide + i} content={slide} />
          <SubjectCell
            key={slide.id + i}
            id={slide.id + i}
            title={slide.title}
          />
        ))}
      </SliderContent>
    </SliderWrapper>
  );
};
export default SubjectSlider;

interface ContentType {
  translateVal: number;
  transitionVal: number;
  widthVal: number;
}
const SliderContent = styled.div<ContentType>`
  border: solid 1px black;
  transform: translateX(-${(props) => props.translateVal}px);
  transition: transform ease-in-out ${(props) => props.transitionVal}s;
  width: ${(props) => props.widthVal}px;
  display: flex;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  //border: solid 1px red;
  height: 80px;
`;
