import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/common/Header";
import CloudLogo from "../../components/common/CloudLogo";
import Input from "../../components/account/Input";
import Button from "../../components/account/Button";
import FooterButton from "../../components/account/FooterButton";

// height는 추후 수정 필요 시 수정
const Container = styled.div`
  width: 100%;
  min-width: 1276px;
  height: 1024px;
  position: fixed;
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
      <Header />
      <CloudLogo />
      <Input
        label="이메일*"
        type="email"
        placeholder="abcdef@naver.com"
        value={email}
        handler={handleEmail}
      />
      <Input
        label="닉네임*"
        type="text"
        value={name}
        handler={handleName}
        placeholder="구르미"
      />
      <Input label="비밀번호*" type="password" value={pw} handler={handlePW} />
      <Input
        label="비밀번호 확인*"
        type="password"
        value={checkPw}
        handler={handleCheckPW}
      />
      <Button onClick={GoAfterSignUp} name="회원가입" />
      <FooterButton
        handler={GoLogin}
        guide="계정이 있으신가요?"
        button="로그인하기"
      />
    </Container>
  );
};
export default CreateAcc;

/*
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
      */
