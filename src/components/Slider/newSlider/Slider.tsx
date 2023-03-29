import React, { PropsWithChildren, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import subIndexState from "../../../atoms/subIndex";
import { useUserStudySubjectListGet } from "../../../hooks/react_query_hooks/useStudySubject";
import COLOR from "../../../style/color";
import SlideButton from "../SlideButton";

const Slider = () => {
  const [sliderIdx, setSliderIdx] = useRecoilState(subIndexState);

  const { status, data } = useUserStudySubjectListGet();

  return (
    <ButtonContainerDiv>
      {status === "success" && data && (
        <SliderWrap>
          {sliderIdx > 0 && (
            <SlideButton
              direction="left"
              onClick={() => setSliderIdx((state) => state - 1)}
            />
          )}
          {sliderIdx < data.data.data.length - 1 && (
            <SlideButton
              direction="right"
              onClick={() => setSliderIdx((state) => state + 1)}
            />
          )}

          <SliderSubjectList>
            {data.data.data.map((item, idx) => (
              <SliderLi key={`slider-${item.id}`}>{item.title}</SliderLi>
            ))}
          </SliderSubjectList>
        </SliderWrap>
      )}
    </ButtonContainerDiv>
  );
};

const SliderSubjectList = ({ children }: PropsWithChildren) => {
  const sliderIdx = useRecoilValue(subIndexState);
  return (
    <SliderUl transitionVal={1000} translateVal={sliderIdx * 200}>
      {children}
    </SliderUl>
  );
};
const SliderWrap = ({ children }: PropsWithChildren) => {
  return <SliderWrapDiv>{children}</SliderWrapDiv>;
};
// const Left = () => {
//   return <SlideButton direction="left" />;
// };
// const Right = () => {
//   return <SlideButton direction="right" />;
// };
export default Slider;

const ButtonContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* border: solid 1px skyblue; */
  width: 100%;
  height: 60.8px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const SliderWrapDiv = styled.div`
  /* position: relative; */

  /* border: solid 1px black; */
  border-radius: 30px;
  overflow: hidden;
  width: 300px;
`;

type SliderUlProps = {
  transitionVal: number;
  translateVal: number;
};
const SliderUl = styled.ul<SliderUlProps>`
  /* width: 600px; */
  height: 40px;
  transform: translateX(-${(props) => props.translateVal}px);
  transition: transform ease-in-out 0.5s;
  white-space: nowrap;
  padding-left: 50px;
`;
const SliderLi = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 40px;
  margin-left: 50px;
  margin-right: 50px;
  border: none;
  border-radius: 30px;

  background: ${COLOR.DARKMAIN};

  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-align: center;
  list-style: "none";
`;
