import GlobalStyles from "./style/GlobalStyles";
import LoginContainer from "./containers/LoginContainer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import StudyHome from "./containers/StudyRoom/StudyHome";
import StudyRoomDetail from "./containers/StudyRoom/StudyRoomDetail";
import FullCalendar from "./components/Calendar/FullCalendar";
import { QueryClient, QueryClientProvider } from "react-query";
import OAuthContainer from "./containers/OAuthContainer";
import StudyRoom from "./pages/StudyRoom";
import MyStudyRoom from "./pages/MyStudyRoom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 300000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/login/oauth2/code/:type" element={<OAuthContainer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<FullCalendar />} />
          <Route path="/studyroom/:type" element={<StudyRoom />} />
          {/* <Route path="/studyroom/detail/:rid" element={<StudyRoomDetail />} /> */}
          <Route
            path="/studyroom/my-studyroom/:type"
            element={<MyStudyRoom />}
          />
          <Route path="/test" element={<StudyHome />} />
        </Routes>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
