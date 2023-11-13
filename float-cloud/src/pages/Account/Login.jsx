import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const EmailBox = styled.div`
  height: 110px;

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
const BoxText = styled.p`
  margin-left: -408px;

  color: var(--Mono-5, #404040);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const EmailLabel = styled.span`
  margin-left: -15px;
`;

const PwdBox = styled.div`
  height: 110px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputEmail = Form;
const InputPwd = Form;

const LoginBox = styled.div`
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginBtn = styled.button`
  display: inline-flex;
  width: 470px;
  height: 50px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: #fafafa;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */

  border: none;
  border-radius: 10px;
  background: var(--Skyblue-100, #0094ff);
`;

const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignUpText = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;
const SignUpBtn = styled.button`
  width: 100px;
  height: 50px;

  margin-left: 5px;

  color: #0094ff;
  font-family: SUIT;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  text-decoration-line: underline;

  border: none;
  background-color: transparent;
`;

const Login = () => {
  const navigate = useNavigate();

  const GoCreateAcc = () => {
    navigate("/CreateAcc");
  };

  const isEmailValid = (email) => {
    // 이메일 형식을 확인하는 정규 표현식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //axios 연결 전
  const GoAfterLogin = (event) => {
    if (email.trim() === "") {
      window.alert("이메일을 입력하세요.");
    } else if (!isEmailValid(email.trim())) {
      window.alert("올바른 이메일 형식을 입력해주세요");
    } else if (pw.trim() === "") {
      return;
    } else {
      localStorage.setItem("loggedInUserEmail", email);
      navigate("/Main");
    }
  };

  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePW = (event) => {
    setPW(event.target.value);
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
      <PwdBox>
        <BoxText>비밀번호*</BoxText>
        <InputPwd type="password" value={pw} onChange={handlePW}></InputPwd>
      </PwdBox>
      <LoginBox>
        <LoginBtn onClick={GoAfterLogin}>로그인</LoginBtn>
      </LoginBox>
      <SignUpBox>
        <SignUpText>계정이 없으신가요?</SignUpText>
        <SignUpBtn onClick={GoCreateAcc}>회원가입하기</SignUpBtn>
      </SignUpBox>
    </Container>
  );
};
export default Login;
