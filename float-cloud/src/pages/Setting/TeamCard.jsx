

import React from "react";
import styled from "styled-components";
import RoundedTag from "../common/RoundedTag"; // RoundedTag 파일 경로에 맞게 수정

const TCard = styled.div`
  background: ${(props) => props.backgroundColor};
  border-radius: 3.125rem;
  width: 22rem;
  height: 22rem;
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: white;
`;

const TeamCard = (props) => {
  return (
    <TCard backgroundColor={props.backgroundColor}>
      <div style={{fontSize:"1.25rem"}}>
        {props.children}
        <RoundedTag
          color={props.tagColor}
          backgroundColor={props.tagBackgroundColor}
          value={props.tagText}
        />
      </div>
    </TCard>
  );
};

export default TeamCard;
