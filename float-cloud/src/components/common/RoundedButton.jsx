import React from "react";
import styled from "styled-components";

const OvalButton = styled.button`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  background: ${(props) => props.backgroundColor};
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 3.125rem;
  border: none;
  padding: 0.625rem 1.25rem;
  justify-content: center;
`;

const RoundedButton = (props) => {
  return (
    <OvalButton
      color={props.color}
      fontSize={props.fontSize}
      backgroundColor={props.backgroundColor}
    >
      {props.value}
    </OvalButton>
  );
};

export default RoundedButton;
