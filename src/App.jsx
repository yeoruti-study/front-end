import GlobalStyles from "./style/GlobalStyles";
import LoginContainer from "./containers/LoginContainer";
import SubjectContainer from "./containers/SubjectContainer";

import { Routes, Route } from "react-router-dom";
import KakaoLogin from "./components/KakaoLogin";
import NaverLogin from "./components/NaverLogin";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/home" element={<SubjectContainer />} />
        <Route path="/kakao/callback" element={<KakaoLogin />} />
        <Route path="/naver/callback" element={<NaverLogin />} />
      </Routes>
    </>
  );
}

export default App;
