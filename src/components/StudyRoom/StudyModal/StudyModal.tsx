// deprecated
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import ModalUserList from "../StudyUserList";

const StudyModal = () => {
  return (
    <ModalBgDiv>
      <ModalWrap>
        <ModalHeader>
          <h1>모달 이름</h1>
        </ModalHeader>
        <ModalBody></ModalBody>
      </ModalWrap>
    </ModalBgDiv>
  );
};

export default StudyModal;

const ModalWrap = ({ children }: PropsWithChildren) => {
  return <ModalWrapDiv>{children}</ModalWrapDiv>;
};
const ModalHeader = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};
const ModalBody = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};
const ModalBgDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalWrapDiv = styled.div`
  z-index: 105;
  width: 400px;
  height: 400px;
  background-color: white;
  padding: 0.9375rem;
  border-radius: 10px;
`;
