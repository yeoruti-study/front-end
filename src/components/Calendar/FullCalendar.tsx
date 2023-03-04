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
import axios from 'axios';
import Modal from '../../common/Modal';
import CalendarModal from './CalendarModal';

const FullCalendar = () => {
  const [eventList, setEventList] = useState([]);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);   // 현재 화면에 보여지는 모든 이벤트들이 담긴 배열
  const [selectInfo, setSelectInfo] = useState<DateSelectArg>();        // 현재 선택된 정보를 포함한 캘린더 상태
  const [modal, setModal] = useState(false);                            // 모달 플로팅을 위한 flag

  useEffect(() => {
    const userId = '05637e09-0ce5-40a9-ab7f-08f792fe56dc';
    axios.get(`http://localhost:8080/api/study-goal/list/user/${userId}`)
      .then(res =>{
        if (res.status === 200) {
          console.log('조회 성공!');
          //res.data.data.forEach((s:any, i:number) => console.log(i+1, s.title));
          setEventList(res.data.data.map((e:any) => ({...e, start: e.startDate, end: e.endDate})));
        }
      })
      .catch(error => {
        console.log('에러발생!');
        console.log(error);
      });
  }, [])

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setSelectInfo(selectInfo);
    const title = 'ds';
    if (title) {
      return setModal(true);
    }
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
