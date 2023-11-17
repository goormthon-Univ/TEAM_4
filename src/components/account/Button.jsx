import React from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.button`
  display: inline-flex;
  width: 470px;
  height: 50px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: #fafafa;
  font-family: SUIT-Bold;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */

  border: none;
  border-radius: 10px;
  background: var(--Skyblue-100, #0094ff);

  &:active {
    background: #007eda;
  }
`;

export default function Button(props) {
  return (
    <Box>
      <Btn onClick={props.onClick}>{props.name}</Btn>
    </Box>
  );
}
