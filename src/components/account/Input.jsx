import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 110px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  margin-left: -408px;

  color: var(--Mono-5, #404040);
  font-family: SUIT-SemiBold;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const Label = styled.span`
  margin-left: -15px;
`;

const Form = styled.input`
  width: 470px;
  height: 50px;
  padding-left: 5px;
  flex-shrink: 0;

  border-radius: 10px;
  border: 1px solid var(--Mono-6, #2a2a2a);
  background: var(--White, #fafafa);
`;

export default function Input(props) {
  return (
    <Box>
      <Text>
        <Label>{props.label}</Label>
      </Text>
      <Form
        type={props.type}
        value={props.value}
        onChange={props.handler}
        placeholder={props.placeholder}
      ></Form>
    </Box>
  );
}
