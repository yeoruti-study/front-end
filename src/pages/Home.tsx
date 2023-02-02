import TimerContainer from "../containers/TimerContainer";
import SubjectContainer from "../containers/SubjectContainer";
import styled from 'styled-components';

const Home = () => {
  return <HomeContainer>
      <TimerContainer />
    <SubjectContainer />
  </HomeContainer>
}

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`