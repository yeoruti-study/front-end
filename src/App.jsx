import GlobalStyles from "./style/GlobalStyles";
import LoginContainer from "./containers/LoginContainer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import StudyHome from "./containers/StudyRoom/StudyHome";
import FullCalendar from "./components/Calendar/FullCalendar";
import OAuthContainer from "./containers/OAuthContainer";
import StudyRoom from "./pages/StudyRoom";
import MyStudyRoom from "./pages/MyStudyRoom";
import PublicRoute from "./components/Router/PublicRoute";
import PrivateRoute from "./components/Router/PrivateRoute";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute restricted={true}>
              <LoginContainer />
            </PublicRoute>
          }
        />
        <Route
          path="/login/oauth2/code/:type"
          element={
            <PublicRoute>
              <OAuthContainer />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/calendar"
          element={
            <PrivateRoute>
              <FullCalendar />
            </PrivateRoute>
          }
        />
        <Route
          path="/studyroom/:type"
          element={
            <PrivateRoute>
              <StudyRoom />
            </PrivateRoute>
          }
        />
        {/* <Route path="/studyroom/detail/:rid" element={<StudyRoomDetail />} /> */}
        <Route
          path="/studyroom/my-studyroom/:type"
          element={
            <PrivateRoute>
              <MyStudyRoom />
            </PrivateRoute>
          }
        />
        <Route path="/test" element={<StudyHome />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
