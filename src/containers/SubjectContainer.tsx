import SubjectSlider from "../components/Slider/SubjectSlider";
import styled from "styled-components";

export type DataType = {
  id: string;
  title: string;
};
let dummyData: Array<DataType> = [
  { id: "1", title: "파이썬" },
  { id: "3", title: "도커" },
  { id: "4", title: "로그인" },
];

const SubjectContainer = () => {
  const addDefaultData = (data: Array<DataType>) => {
    return [{ id: "default", title: "과목 추가하기" }, ...data];
  };
  return (
    <SubjectSlider
      slides={addDefaultData(dummyData)}
      width={400}
      handleClick={() => console.log("handleClick")}
      addSubject={() => console.log("add subject")}
    >
      <ButtonWrapper>
        <SubjectSlider.Left />
        <SubjectSlider.Right />
      </ButtonWrapper>
      <SubjectSlider.Content />
    </SubjectSlider>
  );
};

export default SubjectContainer;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
