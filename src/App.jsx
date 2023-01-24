import GlobalStyles from "./style/GlobalStyles";
import LoginContainer from "./containers/LoginContainer";
import SubjectContainer from "./containers/SubjectContainer";

import { Routes, Route } from "react-router-dom";
import KakaoLogin from "./component/Login/KakaoLogin";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/home" element={<SubjectContainer />} />
        <Route path="/kakao/callback" element={<KakaoLogin />} />
      </Routes>
    </>
  );
}
export default App;
