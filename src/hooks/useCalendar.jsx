import React from 'react';
import { CalendarContext } from '../components/Calendar/Calendar';

const useCalendar = () => {
  const context = React.useContext(CalendarContext);
  if (context === undefined) throw new Error('useCalendar must be used within a <Calendar />');
  return context;
};

export default useCalendar;