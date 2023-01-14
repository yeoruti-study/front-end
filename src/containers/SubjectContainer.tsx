import React from "react";
import SubjectSlider from "../components/SubjectSlider";

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
  // TODO: subject 가져오기
  // return <>{/* <SubjectSlider /> */}</>;
  const addDefaultData = (data: Array<DataType>) => {
    return [{ id: "default", title: "과목 추가하기" }, ...data];
  };
  return <SubjectSlider slides={addDefaultData(dummyData)} width={400} />;
};

export default SubjectContainer;
