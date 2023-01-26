import React, { MouseEventHandler } from "react";
import { ReactComponent as Next } from "../../assets/icons/chevron-right.svg";
import { ReactComponent as Prev } from "../../assets/icons/chevron-left.svg";
import styled from "styled-components";

type SlideButtonProps = {
  direction: string;
  onClick?: MouseEventHandler;
  disable?: boolean;
};
const SlideButton = (props: SlideButtonProps) => {
  const { direction, onClick, disable } = props;

  const findButton = (direction: string) => {
    if (!direction || disable) return <></>;
    if (direction === "left") {
      return (
        <LeftButtonWrapper
          direction="left"
          onClick={disable ? () => {} : onClick}
        >
          <Prev fill="white" style={{ width: "20px", height: "20px" }} />
        </LeftButtonWrapper>
      );
    } else if (direction === "right") {
      return (
        <RightButtonWrapper
          direction="right"
          onClick={disable ? () => {} : onClick}
        >
          <Next fill="white" style={{ width: "20px", height: "20px" }} />
        </RightButtonWrapper>
      );
    }
    return <></>;
  };

  return findButton(direction);
};

export default SlideButton;

interface ButtonProps {
  direction: string;
  onClick?: Function;
}
const SlideButtonWrapper = styled.div<ButtonProps>`
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  cursor: pointer;
`;
const LeftButtonWrapper = styled(SlideButtonWrapper)`
  left: 5px;
`;
const RightButtonWrapper = styled(SlideButtonWrapper)`
  right: 5px;
`;
