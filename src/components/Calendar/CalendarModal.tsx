import { useEffect, useRef } from 'react';
import goalState from '../../atoms/goal';
import styled from 'styled-components';
import Input from "../../common/Input";
import COLOR from '../../style/color';
import Button from '../../common/Button';
import { DateSelectArg } from '@fullcalendar/core';
import { useRecoilState } from 'recoil';
import { useStudyGoalPost } from '../../hooks/react_query_hooks/useStudyGoal';
import { StudyGoalType } from '../../api/studyGoal/types/studyGoalType';

type CalendarModalProps = {
  selectInfo?: DateSelectArg,
  close: () => void,
};

const initialGoal = {
  title: '',
  detail: '',
  goalTime: '',
  startDate: new Date(),
  endDate: new Date(),
  userId: '05637e09-0ce5-40a9-ab7f-08f792fe56dc',
  userStudySubjectId: '',
};

const CalendarModal = ({ selectInfo, close }: CalendarModalProps) => {
  const [goal, setGoal] = useRecoilState(goalState);
  const { create } = useStudyGoalPost();
  const studyGoalRef = useRef<HTMLInputElement []|HTMLTextAreaElement[]>([]);

  useEffect(() => {
    setGoal(prev => ({ ...prev, startDate: new Date(selectInfo!.startStr), endDate: new Date(selectInfo!.endStr) }));
    console.log(goal);
  }, []);

  // Input Dom의 값 저장 및 가공
  const onSave = () => {
    let newStudyGoal: any = {};
    studyGoalRef.current.forEach(ele => {
      if (ele.id !== 'hour' && ele.id !== 'min')
        newStudyGoal = { ...newStudyGoal, [ele.id]: ele.value }
    });
    const formattedGoalTime = 'PT' + studyGoalRef.current[2].value.toString() + 'H' + studyGoalRef.current[3].value.toString() + 'M';
    newStudyGoal = { ...newStudyGoal, goalTime: formattedGoalTime, userStudySubjectId: '1e347c2e-4f17-4838-ae07-49be14ebc60b' };
    return newStudyGoal;
  };

  // 실제 공부목표 생성
  const onCreate = () => {
    const newStudyGoal:StudyGoalType = onSave();
    console.log(newStudyGoal);
    let calendarApi = selectInfo!.view.calendar;
    calendarApi.unselect();
    create(newStudyGoal);
    //calendarApi.addEvent({ ...goal, start: goal.startDate, end: goal.endDate });
    setGoal(initialGoal);
    close();
  };

  return (
    <CalendarModalContainer>
      <Label>목표 이름</Label>
      <Input id='title' ref={(ref:HTMLInputElement)=>studyGoalRef.current[0] = ref}/>
      <Label>설명</Label>
      <DetailTextArea  id='detail' ref={(ref:HTMLTextAreaElement)=>studyGoalRef.current[1] = ref}/>
      <Label>목표 시간</Label>
      <div style={{display: 'flex', justifyContent: 'space-between'}} >
        <Input id='hour' type='number' placeholder='시' width='48%' min={0} ref={(ref:HTMLInputElement)=>studyGoalRef.current[2] = ref}/>
        <Input id='min' type='number' placeholder='분' width='48%' min={0} max={59} ref={(ref:HTMLInputElement)=>studyGoalRef.current[3] = ref}/>
      </div>
      <Label>시작 날짜</Label>
      <Input id='startDate'  defaultValue={selectInfo?.startStr} ref={(ref:HTMLInputElement)=>studyGoalRef.current[4] = ref} />
      <Label>종료 날짜</Label>
      <Input  id='endDate' defaultValue={selectInfo?.endStr} ref={(ref:HTMLInputElement)=>studyGoalRef.current[5] = ref}/>
      <Label>과목 선택(select)</Label>
      <select>
        <option value=''></option>
      </select>
      <ButtonSet>
        <Button primary={false} onClick={close}>취소</Button>
        <Button onClick={onCreate}>생성</Button>
      </ButtonSet>
    </CalendarModalContainer>
  );
}

export default CalendarModal;

const CalendarModalContainer = styled.div`
  width: 20%;
  min-width: 300px;
  padding: 1vw;
`

const Label = styled.h2`
  margin-top: 0.6rem;
  margin-bottom: 0.4rem;
  font-weight: 700;
`

const DetailTextArea = styled.textarea`
  width: 100%;
  height: 4.5rem;
  padding: 8px 16px;
  border: 2px solid ${COLOR.MAIN};
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  line-height: 120%;
  resize: none;
  transition: all 0.2s;
  &:focus-within {
    box-shadow: 0 0 8px ${COLOR.SUB};
  }  
`

const ButtonSet = styled.div`
  display: flex;
  gap: 1rem;
`