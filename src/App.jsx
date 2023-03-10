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
          <Route path="/studyroom" element={<StudyHome />} />
          <Route path="/studyroom/detail/:rid" element={<StudyRoomDetail />} />
        </Routes>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
