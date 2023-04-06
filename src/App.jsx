import GlobalStyles from "./style/GlobalStyles";
import LoginContainer from "./containers/LoginContainer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import FullCalendar from "./components/Calendar/FullCalendar";
import OAuthContainer from "./containers/OAuthContainer";
import StudyRoom from "./pages/StudyRoom";
import MyStudyRoom from "./pages/MyStudyRoom";
import PublicRoute from "./components/Router/PublicRoute";
import PrivateRoute from "./components/Router/PrivateRoute";
import Navigation from "./components/Navigation/Navigation";
import styled from "styled-components";
import UserNavigation from "./components/Navigation/UserNavigation";
// import { PropsWithChildren } from "react";
function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <GlobalWrap>
        <UserNavigation />
        <MainContentWrapDiv>
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
          </Routes>
        </MainContentWrapDiv>
      </GlobalWrap>
    </RecoilRoot>
  );
}

const GlobalWrap = ({ children }) => {
  return <GlobalWrapDiv>{children}</GlobalWrapDiv>;
};
export default App;

const GlobalWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const MainContentWrapDiv = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  height: 100%;
`;
