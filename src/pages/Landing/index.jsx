import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/common/Header";

// height는 추후 수정 필요 시 수정
const Container = styled.div`
  width: 100%;
  height: 1024px;
  position: fixed;
`;

const Middle = styled.div`
  width: 100%;

  padding: 20px 60px 20px 60px;
  margin-top: 4%;
`;
const MiddSection1 = styled.div`
  width: 90%;
  height: 330px;
  padding: 20px;

  display: flex;
`;
const CloudImages = styled.div`
  display: inline-block;
  height: 300px;
  padding-left: 300px;
  padding-right: 38px;
  padding-top: 45px;
  width: 50%;
`;
const OutLine = styled.div`
  display: inline-block;
  height: 250px;
  width: 78%;
  min-width: 625px;
  min-width: 625px;
  padding-top: 96px;
`;
const P1 = styled.p`
  color: var(--Mono-7, #131313);
  font-family: SUIT;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 72.8px */
`;
const P2 = styled.p`
  margin-top: -25px;

  color: var(--Mono-5, #404040);
  font-family: SUIT-Medium;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 36px */
`;

const MiddSection2 = styled.div`
  width: 90%;
  min-width: 1445px;
  height: 40px;
  margin: 10px;
`;
const StartBtn = styled.button`
  color: #fff;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */

  width: 85px;
  height: 40px;
  margin-left: 73%;

  border: none;
  border-radius: 11px;
  border: 2px solid var(--Skyblue-100, #0094ff);
  background: var(--Skyblue-100, #0094ff);

  &:active {
    background: #007eda;
  }
`;

const LandingPage = () => {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Header />
      <Middle>
        <MiddSection1>
          <CloudImages>
            <motion.img
              src="./images/HomeCloud.png"
              style={{ width: "400px" }}
              alt="구름2개"
              animate={{
                y: ["0%", "3.8%", "0%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "linear",
              }}
            ></motion.img>
          </CloudImages>
          <OutLine>
            <P1>
              당신의 <b>뜬구름</b>
              <br />
              흘러가게 두지 마세요
            </P1>

            <P2>
              아이디어를 공유하고, 멤버들과 발전시켜보세요!
              <br />
              구름을 모아 팀 프로젝트의 발판을 다져보세요
            </P2>
          </OutLine>
        </MiddSection1>
        <MiddSection2>
          <StartBtn onClick={goLogin}>시작하기</StartBtn>
        </MiddSection2>
      </Middle>
    </Container>
  );
};
export default LandingPage;
