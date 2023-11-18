import React from "react";
import styled from "styled-components";

const DeadTeamStyle = styled.div`
  background-color: "#9D9D9DB2";
  color: "#FAFAFA";

  span {
    background-color: "#FAFAFA";
    color: "#848484";
  }
`

const CardPane = styled.div`
  background: ${(props) => props.backgroundColor}; 
  color: ${(props) => props.color};
  border-radius: 3.125rem;
  width: 20rem;
  height: 20rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const TeamNameTxt = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-left: 2rem;
`;

const TeamMadeDate = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-left: 2rem;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
  align-items: flex-end;

`
const GoormIcon = styled.img`
  width: 6rem;
  height: auto;
  margin-right: 1.5rem;
  margin-bottom: 2rem;
`
const RoundedTag = styled.span`
  color: ${(props) => props.tagColor};
  font-size: ${(props) => props.fontSize};
  background: ${(props) => props.tagBackgroundColor};
  font-weight: 500;
  border-radius: 3.125rem;
  border: none;
  padding: 0.625rem 1.25rem;
  justify-content: right;
  margin-bottom: 2rem;
  margin-right: 2rem;
`

const TeamCard = (props) => {
  return (
    <CardPane backgroundColor={props.bgColor} color={props.Color}>
      <TopContainer>
        <TeamNameTxt> {props.children}</TeamNameTxt>
        <TeamMadeDate> {props.children}</TeamMadeDate>
      </TopContainer>
      <BottomContainer>
        <GoormIcon />
        <RoundedTag
        tagBackgroundColor={props.tagBgColor}
        tagColor={props.tagColor}
        >{props.goormCnt}</RoundedTag >
      </BottomContainer>
    </CardPane>
  );
};

export default TeamCard;
