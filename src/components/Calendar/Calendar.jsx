import { createContext, useState } from 'react';
import useCalendar from '../../hooks/useCalendar';
import CalendarCell from './CalendarCell';
import styled from 'styled-components';

export const CalendarContext = createContext();

const findStartDay = (date) => {
  let newDay = new Date(date.setDate(1));
  return newDay.getDay();
}

const findEndDate = (date) => {
  let newDate = new Date(date.year, date.month+1, 0);
  return newDate.getDate();
};

const Calendar = ({ children }) => {
  const today = new Date();
  const [date, setDate] = useState({ year: today.getFullYear(), month: today.getMonth(), startDay: findStartDay(today)});
  return <CalendarContext.Provider value={{date, setDate}}>
    {children}
  </CalendarContext.Provider>
};

const CalendarHeader = () => {
  const { date, setDate } = useCalendar();

  const prevMonth = () => {
    const prev = new Date(date.year, date.month - 1, 1);
    setDate({ year: prev.getFullYear(), month: prev.getMonth(), startDay: findStartDay(prev) });
  };

  const nextMonth = () => {
    const next = new Date(date.year, date.month + 1, 1);
    setDate({ year: next.getFullYear(), month: next.getMonth(), startDay: findStartDay(next) });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <span>{date.year}년</span>
        <h2>{date.month + 1}월</h2>
      </div>
      <div >
        <button onClick={prevMonth}>전</button>
        <button onClick={nextMonth}>후</button>
      </div>
    </div>
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
        {w.map((d, i)=> <div key={i}>{d}</div>)}
      </CalendarWeekWrapper>
    )}
  </CalendarBoardWrapper>)
};

Calendar.Header = CalendarHeader;
Calendar.Board = CalendarBoard;

export default Calendar;

const CalendarBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CalendarWeekWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`