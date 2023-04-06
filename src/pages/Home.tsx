import TimerContainer from "../containers/TimerContainer";
import styled from "styled-components";
import Slider from "../components/Slider/newSlider/Slider";
import { PropsWithChildren } from "react";
import SubjectAddDelete from "../components/SubjectAddDelete/SubjectAddDelete";
import RecentRecordContainer from "../containers/RecentRecordContainer";

const Home = () => {
  return (
    <HomeWrap>
      <HomeBoxWrap>
        <Slider />
        <TimerContainer />
      </HomeBoxWrap>
      <SubjectAddDelete />
      {/* <RecentRecordContainer /> */}
      {/* <StudyRoomPreview /> */}
    </HomeWrap>
  );
};

const HomeWrap = ({ children }: PropsWithChildren) => {
  return <HomeContainer>{children}</HomeContainer>;
};
const HomeBoxWrap = ({ children }: PropsWithChildren) => {
  return <HomeBox className="Study__Timer__Div">{children}</HomeBox>;
};
export default Home;

const HomeContainer = styled.div`
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-template-rows: 250px 1fr 250px;
  grid-gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px 30px;

  background-color: #eaeaea;
  .Study__Timer__Div {
    grid-column: 1/2;
    grid-row: 1/2;
    background-color: #fff;
  }
  .Subject__Add__Div {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 10px; */
  /* border: solid 1px blue; */
  /* border: solid 1px rgba(0, 0, 0, 0.2); */
  border-radius: 20px;
  box-shadow: 0px 6px 15px -3px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 6px 15px -3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 6px 15px -3px rgba(0, 0, 0, 0.1);
`;
