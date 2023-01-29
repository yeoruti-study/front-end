import GlobalStyles from "./style/GlobalStyles";
import LoginContainer from "./containers/LoginContainer";
import SubjectContainer from "./containers/SubjectContainer";

import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/home" element={<SubjectContainer />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
