import { useState, useEffect, ChangeEvent } from 'react';
import goalState from '../../atoms/goal';
import styled from 'styled-components';
import Input from "../../common/Input";
import COLOR from '../../style/color';
import Button from '../../common/Button';
import { DateSelectArg } from '@fullcalendar/core';
import { useRecoilState } from 'recoil';

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
  const [goalTime, setGoalTime] = useState({ hour: 0, min: 0});

  useEffect(() => {
    setGoal(prev => ({ ...prev, startDate: new Date(selectInfo!.startStr), endDate: new Date(selectInfo!.endStr) }));
    console.log(goal);
  }, []);

  const onChange = (e: ChangeEvent<any>) => {
    setGoal(prev => ({ ...prev, [e.target.id]: e.target.value }));
    if (e.target.id === 'hour') setGoalTime(prev => ({ ...prev, hour: e.target.value }));
    else if (e.target.id === 'min') setGoalTime(prev => ({ ...prev, min: e.target.value }));
  }

  const onCreate = () => {
    let calendarApi = selectInfo!.view.calendar;
    calendarApi.unselect();
    const formattedGoalTime = 'PT' + goalTime.hour.toString() + 'H' + goalTime.min.toString() + 'M';
    console.log(formattedGoalTime);
    setGoal(prev => ({ ...prev, goalTime: formattedGoalTime}));
    // api 요청
    console.log(goal);
    calendarApi.addEvent({ ...goal, start: goal.startDate, end: goal.endDate });
    setGoal(initialGoal);
    close();
  }

  return (
    <CalendarModalContainer>
      <Label>목표 이름</Label>
      <Input id='title' onChange={onChange} />
      <Label>설명</Label>
      <DetailTextArea  id='detail' onChange={onChange}/>
      <Label>목표 시간</Label>
      <div style={{display: 'flex', justifyContent: 'space-between'}} >
        <Input id='hour' type='number' placeholder='시' width='48%' min={0} onChange={onChange} />
        <Input id='min' type='number' placeholder='분' width='48%' min={0} max={59} onChange={onChange} />
      </div>
      <Label>시작 날짜</Label>
      <Input id='startDate'  defaultValue={selectInfo?.startStr} onChange={onChange} />
      <Label>종료 날짜</Label>
      <Input  id='endDate' defaultValue={selectInfo?.endStr} onChange={onChange}/>
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