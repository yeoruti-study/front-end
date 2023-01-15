import GlobalStyles from "./style/GlobalStyles";
import LoginContainer from "./container/LoginContainer";
import SubjectContainer from "./containers/SubjectContainer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/home" element={<SubjectContainer />} />
      </Routes>
    </>
  );
}

export default App;
