import {useState, useEffect} from 'react'
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
} from '@fullcalendar/core';
import OriginFullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './style.css';
import Modal from '../../common/Modal';
import CalendarModal from './CalendarModal';
import { useStudyGoalAllGet } from '../../hooks/react_query_hooks/useStudyGoal';
import UTC_toKR from '../../utils/UTC_toKR';

const FullCalendar = () => {
  const [eventList, setEventList] = useState<any []>([]);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);   // 현재 화면에 보여지는 모든 이벤트들이 담긴 배열
  const [selectInfo, setSelectInfo] = useState<DateSelectArg>();        // 현재 선택된 정보를 포함한 캘린더 상태
  const [modal, setModal] = useState(false);                            // 모달 플로팅을 위한 flag
  const { data } = useStudyGoalAllGet();

  useEffect(() => {
    // full calendar에 알맞은 데이터 타입 추가
    if (data) setEventList(data.data.data.map((e: any) => ({ ...e, start: e.startDate, end: e.endDate })));
  }, [data]);

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    selectInfo!.end.setDate(selectInfo!.end.getDate() - 1); 
    selectInfo!.endStr = UTC_toKR(selectInfo!.end).substring(0, 10);  // 모달에서 초기값으로 사용하는 endStr에는 하루 전으로 설정해야함.(full calendar 특성)
    selectInfo!.end.setDate(selectInfo!.end.getDate() + 1);           // 실제 api 요청에 담기는 end에는 실제값 기재.
    setSelectInfo(selectInfo);
    return setModal(true);
  };

  return (<>
        <OriginFullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: '',
            center: 'title',
          }}
          initialView='dayGridMonth'
          selectable={true}
          //editable={true}
          droppable={true}
          dayMaxEvents={true}
          events={eventList}
          select={handleDateSelect}
          eventContent={renderEventContent}         // 일정 custom 함수
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          defaultAllDay={true}
          fixedWeekCount={false}
          aspectRatio={1.7}
    />
      <Modal open={modal} header='목표 세우기'>
        <CalendarModal selectInfo={selectInfo} close={()=>setModal(false)} />
      </Modal>
    </>
  );
};

export default FullCalendar;

const handleEventClick = (clickInfo: EventClickArg) => {
  // 추후에 모달을 띄워 수정/삭제의 유무 질문
  if (window.confirm(`${clickInfo.event.title} 일정을 삭제할까요?`)) {
    clickInfo.event.remove();
  }
};
  
function renderEventContent(eventContent: EventContentArg) {
  return (
      <div>{eventContent.event.title}</div>
  )
};
