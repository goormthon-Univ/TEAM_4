

import React from "react";
import styled from "styled-components";
import RoundedTag from "../common/RoundedTag"; // RoundedTag 파일 경로에 맞게 수정

const AbtHistory = styled.div`
  background: ${(props) => props.backgroundColor};
  border-radius: 3.125rem;
  width: 35vw;
  height: 10rem;
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: white;
`;

const HistoryTag = (props) => {
  return (
    <AbtHistory backgroundColor={props.backgroundColor}>
      <div style={{fontSize:"1.25rem", paddingtop:"0.5rem"}}>
        {props.children}
        <RoundedTag
          color={props.tagColor}
          backgroundColor={props.tagBackgroundColor}
          value={props.tagText}
        />
      </div>
    </AbtHistory>
  );
};

export default HistoryTag;
