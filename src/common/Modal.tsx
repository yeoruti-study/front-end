import React from 'react';
import styled, { keyframes, css } from 'styled-components';

type ModalProps = {
  open: boolean,              // modal에 대한 flag
  children: React.ReactNode,  // modal 내용 컴포넌트
  header?: string,            // modal header
  style?: object,
}

const Modal = ({ open, header, children, style }:ModalProps) => {
  return (
  <ModalBackground open={open}>
      {open ? (
        <>
          <ModalContent style={style}>
          {header&&<ModalHeader>{header}</ModalHeader>}
          {children}
          </ModalContent>
        </>
    ) : null}
  </ModalBackground>
  )
}

export default Modal;

const modalShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const modalBgShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const ModalBackground = styled.div<{open: boolean}>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
  ${({open})=> 
    open? css`
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${modalBgShow} 0.3s;`: null}
`

const ModalHeader = styled.h2`
  width: 100%;
  padding: 1.2rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: beige;
  text-align: center;
`

const ModalContent = styled.section`
  display: flex;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  animation: ${modalShow} 0.3s;
  overflow: hidden;
`