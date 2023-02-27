import GlobalStyles from "./style/GlobalStyles";
import LoginContainer from "./containers/LoginContainer";
import Home from "./pages/Home";
import CalendarContainer from "./containers/CalendarContainer";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import StudyHome from "./containers/StudyRoom/StudyHome";
import StudyRoomDetail from "./containers/StudyRoom/StudyRoomDetail";
import FullCalendar from "./components/Calendar/FullCalendar";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<FullCalendar />} />
          <Route path="/studyroom" element={<StudyHome />} />
          <Route path="/studyroom/detail/:rid" element={<StudyRoomDetail />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
