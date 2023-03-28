// deprecated

import SubjectSlider from "../components/Slider/SubjectSlider";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import subIndexState from "../atoms/subIndex";
import Input from "../common/Input";
import Button from "../common/Button";
import newSubState from "../atoms/newSub";
import subListState from "../atoms/subList";
import {
  useUserStudySubjectListGet,
  useUserStudySubjectPost,
} from "../hooks/react_query_hooks/useStudySubject";

// export type DataType = {
//   id: string;
//   title: string;
// };
// let dummyData: Array<DataType> = [
//   { id: "1", title: "파이썬" },
//   { id: "2", title: "도커" },
//   { id: "3", title: "로그인" },
// ];

const SubjectContainer = () => {
  const subjectIndex = useRecoilValue(subIndexState);
  const [newSub, setNewSub] = useRecoilState(newSubState);
  const setSubList = useSetRecoilState(subListState);
  const onSubjectCreate = useUserStudySubjectPost();
  useUserStudySubjectListGet();
  const addNewSubject = () => {
    // TODO: 모달 창으로 만들기
    if (newSub.title === "") {
      alert("과목 이름을 작성해주세요");
      return;
    }
    onSubjectCreate(newSub.title);
    // setSubList((prev) => [...prev, { id: "test", title: newSub.title }]);
    setNewSub({ title: "" });
  };

  return (
    <>
      <ContainerStyle>
        <HeaderStyle>
          <SubjectSlider width={300}>
            <ButtonWrapper>
              <SubjectSlider.Left />
              <SubjectSlider.Right />
            </ButtonWrapper>
            <SubjectSlider.Content />
          </SubjectSlider>
        </HeaderStyle>
        {subjectIndex === 0 ? (
          <BodyStyle>
            <InputWrapper>
              <label>추가할 과목 이름</label>
              <Input
                width="250px"
                value={newSub.title}
                onChange={(e: any) => setNewSub({ title: e.target.value })}
              />
            </InputWrapper>

            <Button
              width="150px"
              style={{ borderRadius: "30px" }}
              onClick={addNewSubject}
            >
              추가하기
            </Button>
          </BodyStyle>
        ) : (
          <div>통계</div>
        )}
      </ContainerStyle>
    </>
  );
};

export default SubjectContainer;
const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  padding: 20px 0;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ContainerStyle = styled.div`
  position: absolute;
  left: 50%;
  bottom: 3vw;

  width: 1300px;
  height: 400px;
  border-radius: 40px;
  box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.1);

  background-color: #f0f0f0;

  transform: translateX(-50%);
`;
const HeaderStyle = styled.div`
  padding: 15px 0;
  border-radius: 40px 40px 0 0;
  background-color: #fafafa;
  overflow: hidden;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 25px;
  width: 100%;
`;
