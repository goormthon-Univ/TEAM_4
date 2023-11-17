import React from "react";
import styled from "styled-components";
import RoundedTag from "../common/RoundedTag";

const CardPane = styled.div`
  background: ${(props) => props.backgroundColor}; 
  color: ${(props) => props.color};
  border-radius: 3.125rem;
  width: 20rem;
  height: 20rem;
  display: flex;
  position: relative;
`;

const TeamNameTxt = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const TeamMadeDate = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

const TeamCard = (props) => {
  return (
    <CardPane backgroundColor={props.backgroundColor} color={props.color}>
      <div name="upper" style="padding:5px">
        <TeamNameTxt> {props.children}</TeamNameTxt>
        <TeamMadeDate> {props.children}</TeamMadeDate>
      </div>

      <div name="bottom">
        <RoundedTag
          color={props.tagColor}
          backgroundColor={props.tagBackgroundColor}
          value={props.tagText}
        />
      </div>
    </CardPane>
  );
};

export default TeamCard;
