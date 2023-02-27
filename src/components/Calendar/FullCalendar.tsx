import React, {useState, useEffect} from 'react'
import {
  EventApi,
  EventDropArg,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/core';
import OriginFullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS } from './event-utils';
import './style.css';
import axios from 'axios';

const FullCalendar = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);



  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events); // 이벤트 목록이 보임
  };

  return (
        <OriginFullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: '',
            center: 'title',
          }}
          initialView='dayGridMonth'
          selectable={true}
          editable={true}
          droppable={true}
          dayMaxEvents={true}
          events={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={renderEventContent}         // 일정 custom 함수
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          defaultAllDay={true}
        />
  );
};

export default FullCalendar;

const handleDateSelect = (selectInfo: DateSelectArg) => {
  let title = prompt('새로운 일정의 제목을 입력해주세요.');
  let calendarApi = selectInfo.view.calendar;

  calendarApi.unselect(); // clear date selection

  if (title) {
    const newSchedule = {
      title,
      detail : "test",
      goalTime : "PT40H30M",
      startDate : new Date(selectInfo.startStr),
      endDate : new Date(selectInfo.endStr),
      userId : "05637e09-0ce5-40a9-ab7f-08f792fe56dc",
      userStudySubjectId : "1e347c2e-4f17-4838-ae07-49be14ebc60b"
    };
    calendarApi.addEvent({...newSchedule, start: newSchedule.startDate, end: newSchedule.endDate});
    
  }
};

const handleEventClick = (clickInfo: EventClickArg) => {
  // 추후에 모달을 띄워 수정/삭제의 유무 질문
  if (window.confirm(`${clickInfo.event.title} 일정을 삭제할까요?`)) {
    clickInfo.event.remove();
  }
};
  
function renderEventContent(eventContent: EventContentArg) {
  return (
      <i>{eventContent.event.title}</i>
  )
};
