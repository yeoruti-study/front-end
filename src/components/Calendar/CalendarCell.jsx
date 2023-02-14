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
  width: 10vw;
  height: 5vmax;
  padding: 0.5vw;
  flex-direction: column;
`

const CalendarCellDay = styled.div`
  flex: 1;
`

const CalendarCellContent = styled.div`
  flex: 6;
`