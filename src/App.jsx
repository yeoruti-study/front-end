import GlobalStyles from "./style/GlobalStyles";
import LoginContainer from "./containers/LoginContainer";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
