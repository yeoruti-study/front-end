import styled from 'styled-components';

const CalendarCell = ({day}) => {
  return <CalendarCellContainer>
    <CalendarCellDay>{day? day: null}</CalendarCellDay>
    <CalendarCellContent>{/*추후에 일정내용이 들어갈 부분*/}</CalendarCellContent>
  </CalendarCellContainer>
};

export default CalendarCell;

const CalendarCellContainer = styled.div`
  display: flex;
  width: 6vmax;
  height: 6vmax;
  padding: 0.5vw;
  flex-direction: column;
  text-align: center;
`

const CalendarCellDay = styled.div`
  flex: 1;
`

const CalendarCellContent = styled.div`
  text-align: start;
  flex: 6;
`