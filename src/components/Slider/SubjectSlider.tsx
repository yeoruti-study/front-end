import React, { useRef, useState } from "react";
import styled from "styled-components";
import useSliderContext from "../../hooks/useSliderContext";
import SlideButton from "./SlideButton";
import COLOR from "../../style/color";
import { useRecoilValue, useSetRecoilState } from "recoil";
import subIndexState from "../../atoms/subIndex";
import subListState from "../../atoms/subList";

export const SliderContext = React.createContext<any | null>(null);

// slider state관리 wrapper라고 보면 됩니다
const SubjectSlider = (props: any) => {
  let activeIndex = useRef<number>(0);
  const subList = useRecoilValue(subListState);
  const setSubjectIndex = useSetRecoilState(subIndexState);

  const prevSlide = () => {
    // 슬라이더 animation 시간이랑 맞아 떨어지도록 setTimeout
    setTimeout(() => setSubjectIndex((prev) => prev - 1), transition * 1000);
    activeIndex.current -= 1;
    setState({
      ...state,
      translate: activeIndex.current * (width + 1000),
    });
  };
  const nextSlide = () => {
    // 슬라이더 animation 시간이랑 맞아 떨어지도록 setTimeout
    setTimeout(() => setSubjectIndex((prev) => prev + 1), transition * 1000);
    activeIndex.current += 1;
    setState({
      ...state,
      translate: activeIndex.current * (width + 1000),
    });
  };

  const [state, setState] = useState({
    translate: 0,
    transition: 0.5,
    width: props.width,
    prevSlide: prevSlide,
    nextSlide: nextSlide,
    activeIndex: activeIndex,
  });
  const { width, transition } = state;

  return (
    <SliderContext.Provider value={{ subList, state }}>
      {props.children}
    </SliderContext.Provider>
  );
};

const SliderContent = () => {
  const { translate, transition, width } = useSliderContext().state;
  const { subList } = useSliderContext();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        left: "50%",
        transform: "translateX(-150px)",
      }}
    >
      <ContentStyle
        translateVal={translate}
        transitionVal={transition}
        widthVal={(width + 1000) * subList.length}
      >
        {subList.map((slide: any, i: number) => (
          <SubjectSlider.Cell
            key={slide.id + i}
            id={slide.id}
            title={slide.title}
            widthVal={width}
          />
        ))}
      </ContentStyle>
    </div>
  );
};

const Left = () => {
  const { activeIndex, prevSlide } = useSliderContext().state;

  if (activeIndex.current <= 0) return <></>;
  return <SlideButton direction="left" onClick={prevSlide} />;
};

const Right = () => {
  const { activeIndex, nextSlide } = useSliderContext().state;
  const { subList } = useSliderContext();

  if (activeIndex.current >= subList.length - 1) return <></>;
  return <SlideButton direction="right" onClick={nextSlide} />;
};

const Cell = (props: any) => {
  const { id, title, widthVal } = props;
  return (
    <>
      {id && id === "default" ? (
        <CellButton widthVal={widthVal}>{title}</CellButton>
      ) : (
        <CellButton widthVal={widthVal}>{title}</CellButton>
      )}
    </>
  );
};

SubjectSlider.Left = Left;
SubjectSlider.Right = Right;
SubjectSlider.Cell = Cell;
SubjectSlider.Content = SliderContent;
export default SubjectSlider;

interface ContentType {
  translateVal: number;
  transitionVal: number;
  widthVal: number;
}
const ContentStyle = styled.ul<ContentType>`
  display: grid;
  grid-auto-flow: column;

  width: ${(props) => props.widthVal}px;

  transform: translateX(-${(props) => props.translateVal}px);
  transition: transform ease-in-out ${(props) => props.transitionVal}s;
`;

interface CellType {
  widthVal: number;
}
const CellButton = styled.li<CellType>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.widthVal}px;
  height: 60px;
  border: none;
  border-radius: 30px;

  background: ${COLOR.DARKMAIN};

  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  text-align: center;
  list-style: none;
`;
