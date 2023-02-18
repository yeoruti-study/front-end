import { createContext, useState, useEffect } from 'react';
import useCalendar from '../../hooks/useCalendar';
import CalendarCell from './CalendarCell';
import {ReactComponent as Prev} from '../../assets/icons/chevron-left.svg';
import {ReactComponent as Next} from '../../assets/icons/chevron-right.svg';
import styled from 'styled-components';
import COLOR from '../../style/color';

import dummy from './dummy.json';

export const CalendarContext = createContext();

// 해당 달의 첫번째 날의 요일
const findStartDay = (date) => {
  let newDay = new Date(date.setDate(1));
  return newDay.getDay();
}

// 해당 달의 마지막 날
const findEndDate = (date) => {
  let newDate = new Date(date.year, date.month+1, 0);
  return newDate.getDate();
};

const isSame = (date1, date2) => {
  return {
    month: () => date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth(),
    date: () => this.month()&&date1.getDate() === date2.getDate()
  };
};

// schedule이 특정 범위(+/-)에 포함되는지 확인하는 함수 
// range=3, date 기준 전후 3개월에 schedule이 포함되는지 확인
const checkSchedule = (date, schedule, range=0) => {
  const targetDate = new Date(date.year, date.month, 1);
  const startDate = new Date(targetDate);
  const endDate = new Date(targetDate);

  startDate.setMonth(targetDate.getMonth() - range);
  if (!range) endDate.setMonth(startDate.getMonth() + range);
  endDate.setDate(findEndDate({ year: endDate.getFullYear(), month: endDate.getMonth() }));
  
  return (isSame.month(startDate, schedule.startDate)
    || isSame.month(endDate, schedule.endDate)
    || (schedule.startDate < startDate && endDate < schedule.endDate))
    || (startDate < schedule.startDate && schedule.endDate < endDate);
};

const initialSchedule = [];
const monthlySchedules = [];

const Calendar = ({ children }) => {
  const today = new Date();
  const [schedule, setSchedule] = useState(initialSchedule);
  const [monthlySchedule, setMonthlySchedule] = useState(monthlySchedules);
  const [date, setDate] = useState({ year: today.getFullYear(), month: today.getMonth(), startDay: findStartDay(today) });
  
  useEffect(() => {
    let formattedSchedule = dummy.data?.map(d => ({ ...d, startDate: new Date(d.startDate), endDate: new Date(d.endDate) }));
    formattedSchedule = formattedSchedule.filter(s => checkSchedule(date, s, 3));
    setSchedule(formattedSchedule);
    console.log(formattedSchedule);
  }, []);

  useEffect(() => {
    /* 
    [{index: -1, schedule: {}}, {index: -1, schedule: {}}, ...] 이와 같은 형식으로 스케쥴을 monthlySchedule에 저장
    이후 CalendarBoard에서 이 정보를 토대로 렌더링
    */
  }, [date]);

  return <CalendarContext.Provider value={{ schedule, setMonthlySchedule, date, setDate }}>
    <CalendarContainer>
      {children}
    </CalendarContainer>
  </CalendarContext.Provider>
};

const CalendarHeader = () => {
  const { schedule, setMonthlySchedule, date, setDate } = useCalendar();

  useEffect(() => {
    checkSchedule(date, schedule);
  }, []);

  const prevMonth = () => {
    const prev = new Date(date.year, date.month - 1, 1);
    setDate({ year: prev.getFullYear(), month: prev.getMonth(), startDay: findStartDay(prev) });
  };

  const nextMonth = () => {
    const next = new Date(date.year, date.month + 1, 1);
    setDate({ year: next.getFullYear(), month: next.getMonth(), startDay: findStartDay(next) });
  };

  return (
    <CalendarHeaderContainer>
      <CalendarHeaderDate>
        <CalendarHeaderMonth>{date.month + 1}월</CalendarHeaderMonth>
        <CalendarHeaderYear>{date.year}년</CalendarHeaderYear>
      </CalendarHeaderDate>
      <CalendarDateMove>
        <PrevMonth onClick={prevMonth} />
        <NextMonth onClick={nextMonth} />
      </CalendarDateMove>
    </CalendarHeaderContainer>
  );
};

const CalendarBoard = () => {
  const { date } = useCalendar();
  const endDate = findEndDate(date);
  let day = 1; 
  let dayOfWeek = 0; 
  let weeks = [];
  let week = [];
  
  while (dayOfWeek < date.startDay) {
    week.push(<CalendarCell day={0} />);
    dayOfWeek++;
  }
  while (day <= endDate) {
    week.push(<CalendarCell day={day} />);
    if (dayOfWeek % 7 === 6) {
      weeks.push(week);
      week = [];
    }
    dayOfWeek++;
    day++;
  }
  while (dayOfWeek % 7 !== 0 ) {
    week.push(<CalendarCell day={0} />);
    dayOfWeek++;
    if (dayOfWeek % 7 === 0) {
      weeks.push(week);
      break;
    }
  }

  return (<CalendarBoardWrapper>
    {weeks.map((w, i) =>
      <CalendarWeekWrapper key={i}>
        {w.map((d, i)=> <CalendarDayWrapper key={i}>{d}</CalendarDayWrapper>)}
      </CalendarWeekWrapper>
    )}
  </CalendarBoardWrapper>)
};

Calendar.Header = CalendarHeader;
Calendar.Board = CalendarBoard;

export default Calendar;

const CalendarContainer = styled.div`
  display: flex;
  width: 45vw;
  flex-direction: column;
`

const CalendarHeaderContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 1vw;
  margin-bottom: 0.7vw;
  justify-content: center;
`

const CalendarDateMove = styled.div`
  position: absolute;
  display: flex;
  right: 1vw;
  height: 100%;
  align-items: end;
`

const PrevMonth = styled(Prev)`
  width: 2vmax;
  height: 2vmax;
  padding: 0.3vmax;
  border: 1px solid white;
  background-color: ${COLOR.MAIN};
  fill: white;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: ${COLOR.DARKMAIN};
    cursor: default;
  }
`

const NextMonth = styled(Next)`
  width: 2vmax;
  height: 2vmax;
  padding: 0.3vmax;
  border: 1px solid white;
  background-color: ${COLOR.MAIN};
  fill: white;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: ${COLOR.DARKMAIN};
    cursor: default;
  }
`

const CalendarHeaderDate = styled.div`
  text-align: center;
`

const CalendarHeaderYear = styled.span`
  display: block;
  margin-top: 0.3vw;
  color: ${COLOR.SUB};
`

const CalendarHeaderMonth = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: ${COLOR.MAIN};
`

const CalendarBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CalendarWeekWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`

const CalendarDayWrapper = styled.div`
  border: 1px solid ${COLOR.SUB};
`