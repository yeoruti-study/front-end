import React, {
  MutableRefObject,
  PropsWithChildren,
  useRef,
  useState,
} from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import studyRoomFilterAtom from "../../../atoms/studyRoomFilter";
import { useStudyCategoryAllGet } from "../../../hooks/react_query_hooks/useStudyCategory";
import COLOR from "../../../style/color";

const StudyRoomFilter = () => {
  const { status, data } = useStudyCategoryAllGet();
  const [studyRoomFilter, setStudyRoomFilter] =
    useRecoilState(studyRoomFilterAtom);
  const [isFilterOverflow, setIsFilterOverflow] = useState(false);

  const filterRef = useRef<HTMLUListElement>(null);

  return (
    <StudyRoomFilterWrap>
      <StudyRoomFilterUlWrap
        filterRef={filterRef as MutableRefObject<HTMLUListElement>}
      >
        {status === "success" &&
          data?.data.data.map((item, idx) => (
            <StudyFilterItem
              value={item.name}
              key={item.id}
              filterHandler={() => {
                if (studyRoomFilter === item.id) setStudyRoomFilter("");
                else {
                  setStudyRoomFilter(item.id);
                }
              }}
              selected={item.id === studyRoomFilter}
            />
          ))}
      </StudyRoomFilterUlWrap>
      <FilterOverflowButton
        onClick={() => {
          if (filterRef.current) {
            if (isFilterOverflow) {
              filterRef.current.style.height = "auto";
              filterRef.current.style.removeProperty("overflow");
              setIsFilterOverflow(false);
            } else {
              filterRef.current.style.height = "41px";
              filterRef.current.style.overflow = "hidden";
              setIsFilterOverflow(true);
            }
          }
        }}
      >
        {isFilterOverflow ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(0,0,0,0.6)"
            className="w-6 h-6 Dropdown__Chevron__Down"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="rgba(0,0,0,0.6)"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </FilterOverflowButton>
    </StudyRoomFilterWrap>
  );
};

type FilterWrapProps = {
  children: React.ReactNode;
  filterRef: MutableRefObject<HTMLUListElement>;
};
const StudyRoomFilterUlWrap = ({ children, filterRef }: FilterWrapProps) => {
  return (
    <StudyRoomFilterWrapUl ref={filterRef}>{children}</StudyRoomFilterWrapUl>
  );
};
const StudyRoomFilterWrap = ({ children }: PropsWithChildren) => {
  return <StudyRoomFilterWrapSection>{children}</StudyRoomFilterWrapSection>;
};
type StudyFilterItemProps = {
  value: string;
  filterHandler: () => void;
  selected: boolean;
};
const StudyFilterItem = (props: StudyFilterItemProps) => {
  const { value, filterHandler, selected } = props;

  return (
    <StudyFilterItemLi selected={selected} onClick={filterHandler}>
      {value}
    </StudyFilterItemLi>
  );
};

export default StudyRoomFilter;

const StudyRoomFilterWrapSection = styled.section`
  position: relative;
  width: 100%;
  padding: 10px;
  padding-bottom: 15px;
  margin-bottom: 40px;
  border-bottom: solid rgba(0, 0, 0, 0.1) 1px;
`;
const FilterOverflowButton = styled.button`
  position: absolute;
  z-index: 500;
  bottom: -18px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: auto;
  padding: 5px;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transform: translateX(-50%);

  svg {
    height: 20px;
  }
`;
const StudyRoomFilterWrapUl = styled.ul`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  height: auto;
  padding-bottom: 20px;
  overflow: hidden;
`;
type StudyFilterItemLiProps = {
  selected: boolean;
};
const StudyFilterItemLi = styled.li<StudyFilterItemLiProps>`
  padding: 8px;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: ${(props) => (props.selected ? COLOR.MAIN : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "rgba(0, 0, 0, 0.3)")};
  font-size: 0.8rem;
  font-weight: 700;

  cursor: pointer;
`;
