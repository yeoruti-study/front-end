import React, { MouseEventHandler } from "react";
import styled from "styled-components";

type SubjectCellProps = {
  id: string;
  title: string;
  addSubject?: MouseEventHandler;
};
const SubjectCell: React.FC<SubjectCellProps> = (props) => {
  const { id, title, addSubject } = props;
  return (
    <>
      {id && id === "default" ? (
        <CellButton onClick={addSubject && addSubject}></CellButton>
      ) : (
        <CellButton>{title}</CellButton>
      )}
    </>
  );
};

export default SubjectCell;

const CellButton = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 60px;
  text-align: center;
  border: none;
  border-radius: 7px;
  font-size: 1.1rem;
  background: #4169e1;
  color: white;
`;
