import GlobalStyles from "./style/GlobalStyles";
import LoginContainer from "./containers/LoginContainer";
import SubjectContainer from "./containers/SubjectContainer";

import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import StudyHome from "./containers/StudyRoom/StudyHome";
import StudyRoomDetail from "./containers/StudyRoom/StudyRoomDetail";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/home" element={<SubjectContainer />} />
          <Route path="/studyroom" element={<StudyHome />} />
          <Route path="/studyroom/detail/:rid" element={<StudyRoomDetail />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
