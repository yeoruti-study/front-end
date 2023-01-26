import React, {
  MouseEventHandler,
  MutableRefObject,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import useSliderContext from "../../hooks/useSliderContext";
import SlideButton from "./SlideButton";

type State = {
  width: number;
  slides: any;
  translate: number;
  transition: number;
  activeIndex: MutableRefObject<number>;
  handleClick?: MouseEventHandler;
  addSubject?: MouseEventHandler;
  prevSlide?: MouseEventHandler;
  nextSlide?: MouseEventHandler;
};

export const SliderContext = React.createContext<State | null>(null);

// slider state관리 wrapper라고 보면 됩니다
const SubjectSlider = (props: any) => {
  let activeIndex = useRef<number>(0);

  const prevSlide = () => {
    if (activeIndex.current === 0) {
      activeIndex.current = slides.length - 1;
      setState({
        ...state,
        translate: (slides.length - 1) * width,
      });
    } else {
      activeIndex.current -= 1;
      setState({
        ...state,
        translate: activeIndex.current * width,
      });
    }
  };
  const nextSlide = () => {
    if (activeIndex.current === slides.length - 1) {
      activeIndex.current = 0;
      setState({
        ...state,
        translate: 0,
      });
    } else {
      activeIndex.current += 1;
      setState({
        ...state,
        translate: activeIndex.current * width,
      });
    }
  };

  const [state, setState] = useState({
    translate: 0,
    transition: 0.5,
    width: props.width,
    slides: props.slides,
    handleClick: props.handleClick,
    addSubject: props.addSubject,
    prevSlide: prevSlide,
    nextSlide: nextSlide,
    activeIndex: activeIndex,
  });
  const { width, slides } = state;
  return (
    <SliderContext.Provider value={state}>
      {props.children}
    </SliderContext.Provider>
  );
};

const SliderContent = () => {
  const { translate, transition, width, slides } = useSliderContext();
  return (
    <ContentStyle
      translateVal={translate}
      transitionVal={transition}
      widthVal={width * slides.length}
    >
      {slides.map((slide: any, i: number) => (
        <SubjectSlider.Cell
          key={slide.id + i}
          id={slide.id + i}
          title={slide.title}
        />
      ))}
    </ContentStyle>
  );
};
const Left = () => {
  const { activeIndex, prevSlide } = useSliderContext();

  if (activeIndex.current <= 0) return <></>;
  return <SlideButton direction="left" onClick={prevSlide} />;
};
const Right = () => {
  const { activeIndex, slides, nextSlide } = useSliderContext();

  if (activeIndex.current >= slides.length - 1) return <></>;
  return <SlideButton direction="right" onClick={nextSlide} />;
};
const Cell = (props: any) => {
  const { handleClick, addSubject } = useSliderContext();
  const { id, title } = props;
  return (
    <>
      {id && id === "default" ? (
        <CellButton onClick={addSubject}></CellButton>
      ) : (
        <CellButton onClick={handleClick}>{title}</CellButton>
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
const ContentStyle = styled.div<ContentType>`
  border: solid 1px black;
  transform: translateX(-${(props) => props.translateVal}px);
  transition: transform ease-in-out ${(props) => props.transitionVal}s;
  width: ${(props) => props.widthVal}px;
  display: flex;
`;

const CellButton = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 60px;
  text-align: center;
  border: none;
  border-radius: 7px;
  font-size: 1.1rem;
  background: #4169e1;
  color: white;
`;
