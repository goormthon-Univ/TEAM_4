import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// height는 추후 수정 필요 시 수정
const Container = styled.div`
  width: 100%;
  min-width: 1276px;
  height: 1024px;
  position: fixed;
`;

const Header = styled.div`
  width: 100%;
  height: 78px;
  padding: 10px 20px 10px 20px;

  display: flex;
  align-items: center;
`;

const EngLogo = styled.div``;

const CloudLogo = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  height: 108px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
//이메일 박스
const BoxText = styled.p`
  margin-left: -415px;

  color: var(--Mono-5, #404040);
  font-family: SUIT-SemiBold;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const EmailLabel = styled.span`
  margin-left: -15px;
`;

//박스
const EmailBox = Box;
const NameBox = Box;
const PwdBox = Box;
const CheckPwdBox = Box;
const SignUpBox = Box;

const InputEmail = Form;
const InputName = Form;
const InputPwd = Form;
const InputCheck = Form;

const NameLabel = styled.span`
  margin-left: -16px;
`;
const PwdLabel = styled.span`
  margin-left: 34px;
`;

const SignUpBtn = styled.button`
  display: inline-flex;
  width: 475px;
  height: 50px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: #fafafa;
  font-family: SUIT-Bold;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */

  border: none;
  border-radius: 10px;
  background: var(--Skyblue-100, #0094ff);

  &:active {
    background: #007eda;
  }
`;

//계정있으면 로그인 화면으로 가기 박스
const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginText = styled.div`
  color: #000;
  font-family: SUIT-Medium;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;
const LoginBtn = styled.button`
  width: 100px;
  height: 50px;

  margin-left: 5px;

  color: #0094ff;
  font-family: SUIT-Bold;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  text-decoration-line: underline;

  border: none;
  background-color: transparent;

  &: {
    color: #000;
  }
`;

const CreateAcc = () => {
  const navigate = useNavigate();

  const GoLogin = () => {
    navigate("/login");
  };

  const isEmailValid = (email) => {
    // 이메일 형식을 확인하는 정규 표현식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isNicknameValid = (nickname) => {
    // 닉네임이 한글로만 구성되어 있는지 확인하는 정규 표현식
    const nicknameRegex = /^[가-힣]+$/;
    return nicknameRegex.test(nickname);
  };

  //CSS 마치고 정확하게 하기
  const GoAfterSignUp = async () => {
    if (email.trim() === "") {
      window.alert("이메일을 입력하세요.");
    } else if (!isEmailValid(email.trim())) {
      window.alert("올바른 이메일 형식을 입력해주세요");
    } else if (name.trim() === "") {
      window.alert("닉네임을 입력해주세요.");
    } else if (!isNicknameValid(name.trim())) {
      window.alert("올바른 닉네임 형식을 입력해주세요");
    } else if (pw.trim() === "") {
      window.alert("비밀번호를 입력해주세요.");
    } else if (checkPw.trim() === "" || pw.trim() !== checkPw.trim()) {
      window.alert("비밀번호가 다릅니다. 다시 입력해주세요.");
    } else {
      alert("로그인 성공!");
      navigate("/main");
    }
  };

  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const [name, setName] = useState("");
  const [checkPw, setCheckPW] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePW = (event) => {
    setPW(event.target.value);
  };
  const handleCheckPW = (event) => {
    setCheckPW(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };

  return (
    <Container>
      <Header>
        <EngLogo>
          <img
            src="./images/EngLogo.png"
            style={{ width: "200px" }}
            alt="영어로고"
          ></img>
        </EngLogo>
      </Header>

      <CloudLogo>
        <img src="./images/CloudLogo.png" style={{ width: "168px" }} />
      </CloudLogo>
      <EmailBox>
        <BoxText>
          <EmailLabel>이메일*</EmailLabel>
        </BoxText>
        <InputEmail
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="abc@cloud.com"
        ></InputEmail>
      </EmailBox>
      <NameBox>
        <BoxText>
          <NameLabel>닉네임*</NameLabel>
        </BoxText>
        <InputName
          type="text"
          value={name}
          onChange={handleName}
          placeholder="구르미"
        ></InputName>
      </NameBox>
      <PwdBox>
        <BoxText>비밀번호*</BoxText>
        <InputPwd type="password" value={pw} onChange={handlePW}></InputPwd>
      </PwdBox>
      <CheckPwdBox>
        <BoxText>
          <PwdLabel style={{ marginLeft: "23px" }}>비밀번호 확인*</PwdLabel>
        </BoxText>
        <InputCheck
          type="password"
          value={checkPw}
          onChange={handleCheckPW}
        ></InputCheck>
      </CheckPwdBox>
      <SignUpBox>
        <SignUpBtn onClick={GoAfterSignUp}>회원가입</SignUpBtn>
      </SignUpBox>
      <LoginBox>
        <LoginText>계정이 있으신가요?</LoginText>
        <LoginBtn onClick={GoLogin}>로그인하기</LoginBtn>
      </LoginBox>
    </Container>
  );
};
export default CreateAcc;
