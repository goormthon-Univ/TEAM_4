import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Team = styled.div`
  width: calc(20% - 20px);
  height: calc(13vw - 20px);

  margin: 0.5% 0.8% 4px 0px;
  padding: 25px 28px 10px 28px;
  flex-shrink: 0;

  border-radius: 50px;
  background: var(--Skyblue-20, rgba(0, 148, 255, 0.2));

  @media screen and (max-width: 1443px) {
    width: calc(25% - 64px);
    height: calc(13vw - 6px);
    min-height: 148px;
  }

  &:hover .ShowMember {
    opacity: 1;
    visibility: visible;
  }

  &:actice {
    background: #0071c3;
  }
`;
const Subject = styled.div`
  height: 33px;
  width: 210px;

  color: var(--Mono-5, #404040);
  font-family: SUIT-Bold;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;

  line-height: 150%; /* 27px */
`;

const Image = styled.div`
  display: inline-block;
  width: 25%;
  height: 22%;

  margin-top: 58%;
  border-radius: 10px;
  background: #ffffff;
  flex-shrink: 0;
  position: relative;
`;

//멤버 목록보여주기
const ShowMember = styled.div`
  position: absolute;
  z-index: 1;

  top: 60%;
  left: 52%;

  width: 180px;
  height: 200px;
  flex-shrink: 0;
  transform: translateX(-2%);

  border-radius: 5px;
  padding: 10px 10px;
  opacity: 0.9;

  background: rgba(var(--White-RGB, 255, 255, 255), 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  visibility: hidden;
  transition: opacity 0.3s;
`;
const ShowMemberTitle = styled.span`
  width: 100%;
  height: 25px;

  margin-top: 4px;

  color: var(--Mono-5, #404040);
  font-family: SUIT-Bold;
  font-size: 13px;
  font-style: normal;s
  font-weight: 700;
  line-height: 150%; /* 24px */
`;
const MemberList = styled.div`
  margin-top: 3%;
  overflow-x: fixed;
  position: relative;

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  height: 80%;
`;
const MemberBox = styled.div`
  position: relative;

  padding: 3px;
  margin-bottom: 3px;
  width: 97%;
  height: 14%;
  display: flex;
`;
const MemberImg = styled.div`
  width: 13%;
  height: 100%;
  border-radius: 30px;
  background: #000;
`;
const MemberName = styled.span`
  margin-top: 1%;
  margin-left: 6px;

  color: var(--Mono-5, #404040);
  font-family: SUIT-Medium;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`;
const MemberAuth = styled.div`
  position: absolute;
  top: 4px;
  right: 5px;
  color: #0094ff;
  font-family: SUIT-Regular;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const CountCloud = styled.div`
  display: inline-block;

  vertical-align: 14px;
  width: 54%;
  height: 26px;
  padding: 10px 0px 2px 10px;
  margin-left: 15%;

  color: #fafafa;
  font-family: SUIT-Medium;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */

  flex-shrink: 0;

  border-radius: 36.775px;
  background: #3d94f7;

  @media screen and (max-width: 1578px) {
    font-size: 10px;
    margin-left: 13%;
  }

  @media screen and (max-width: 1434px) {
    font-size: 9.6px;
    margin-left: 10%;
    padding-left: 6px;
    padding-right: 6px;
  }

  @media screen and (max-width: 1342px) {
    font-size: 8.3px;
    margin-left: 9%;
    padding-left: 6px;
    padding-right: 2px;
  }
`;

export default function Ing(props) {
  const [showMembers, setShowMembers] = useState(false);

  return (
    <Team isBelow id={props.id}>
      <Subject>{props.title}</Subject>
      <Image
        onMouseEnter={() => setShowMembers(true)}
        onMouseLeave={() => setShowMembers(false)}
      >
        {/* <img src ="" alt="팀장이 선택한 팀 이미지"/> */}
        {showMembers && (
          <ShowMember className="ShowMember">
            <ShowMemberTitle>멤버 목록(</ShowMemberTitle>
            {/* 몇명인지 카운트한 것 넣기*/}
            <ShowMemberTitle></ShowMemberTitle>
            <ShowMemberTitle>)</ShowMemberTitle>
            <MemberList>
              {/* 한명 당 MemberBox 한개 씩 */}
              <MemberBox>
                <MemberImg>
                  <img src={`./images/${props.icon}.png`} />
                </MemberImg>
                <MemberName>홍민우</MemberName>
                {/* {팀장이면 권한 표시 하기} */}
                <MemberAuth>팀장</MemberAuth>
              </MemberBox>
            </MemberList>
          </ShowMember>
        )}
      </Image>
      {props.goormCount === 0 ? (
        <CountCloud>현재 구름 갯수 0개</CountCloud>
      ) : (
        <CountCloud>현재 구름 갯수{props.goormCount}개</CountCloud>
      )}
    </Team>
  );
}
