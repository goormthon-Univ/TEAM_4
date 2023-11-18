import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/BeforeHeader";
import CloudLogo from "../../components/common/CloudLogo";
import Input from "../../components/account/Input";
import Button from "../../components/account/Button";
import FooterButton from "../../components/account/FooterButton";
import { signIn } from "../../api/auth";

// height는 추후 수정 필요 시 수정
const Container = styled.div`
  width: 100%;
  min-width: 1276px;
  height: 1024px;
  position: fixed;
`;

const Login = () => {
  const navigate = useNavigate();

  const goSignUp = () => {
    navigate("/create-acc");
  };

  const isEmailValid = (email) => {
    // 이메일 형식을 확인하는 정규 표현식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const login = (event) => {
    if (email.trim() === "") {
      window.alert("이메일을 입력하세요.");
    } else if (!isEmailValid(email.trim())) {
      window.alert("올바른 이메일 형식을 입력해주세요");
    } else if (pw.trim() === "") {
      window.alert("비밀번호를 입력하세요.");
    } else {
      signIn({
        email: email,
        password: pw,
      });
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
      <Header />
      <CloudLogo />
      <Input
        label="이메일*"
        type="email"
        placeholder="abcdef@naver.com"
        value={email}
        handler={handleEmail}
      />
      <Input label="비밀번호*" type="password" value={pw} handler={handlePW} />
      <Button onClick={login} name="로그인" />
      <FooterButton
        onClick={goSignUp}
        guide="계정이 없으신가요?"
        button="회원가입하기"
      />
    </Container>
  );
};
export default Login;
