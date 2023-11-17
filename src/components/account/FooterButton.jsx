import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  color: #000;
  font-family: SUIT-Medium;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;
const Btn = styled.button`
  width: 100px;
  height: 50px;

  margin-left: 5px;

  color: #0094ff;
  font-family: SUIT-Bold;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  text-decoration-line: underline;

  border: none;
  background-color: transparent;

  &:active {
    color: #000;
  }
`;

export default function FooterButton(props) {
  return (
    <Box>
      <Text>{props.guide}</Text>
      <Btn onClick={props.onClick}>{props.button}</Btn>
    </Box>
  );
}
