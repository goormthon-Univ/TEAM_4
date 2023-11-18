import React from "react";
import styled from "styled-components";

const SpcAway = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  padding: 10px 20px;
`;

const SpcBetween = (props) => {
  return <SpcAway>{props.children}</SpcAway>;
};

export default SpcBetween;
