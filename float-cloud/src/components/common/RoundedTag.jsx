
import React from "react";
import styled from "styled-components";

const Oval = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  background: ${(props) => props.backgroundColor};
  font-weight: 700;
  border-radius: 3.125rem;
  border: none;
  padding: 0.625rem 1.25rem;
  justify-content: center;
`;

const RoundedTag = (props) => {
  return (
    <Oval
      color={props.color}
      fontSize={props.fontSize}
      backgroundColor={props.backgroundColor}
    >
      {props.value}
    </Oval>
  );
};

export default RoundedTag;
