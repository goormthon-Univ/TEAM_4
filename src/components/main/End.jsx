import React from "react";
import styled from "styled-components";

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

export default function End() {
  return (
    <Team isBelow style={{ background: "#b1b3ba" }}>
      <Subject style={{ color: "#fff" }}>예시1</Subject>
      <Image />
      <CountCloud
        style={{
          background: "#fff",
          color: "#848484",
          paddingLeft: "32px",
          width: "39%",
        }}
      >
        종료된 팀
      </CountCloud>
    </Team>
  );
}
