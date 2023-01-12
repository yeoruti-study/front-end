import GlobalStyles from './style/GlobalStyles';
import LoginContainer from './container/LoginContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (<>
    <GlobalStyles />
    <Routes>
      <Route path='/' element={<LoginContainer />} />
    </Routes>
    </>
  );
}

export default App;
