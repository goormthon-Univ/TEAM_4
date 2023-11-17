import React from "react";
import styled from "styled-components";

const SpcAway = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 2rem;
`;

const SpcBetween = (props) => {
  return <SpcAway>{props.children}</SpcAway>;
};

export default SpcBetween;
