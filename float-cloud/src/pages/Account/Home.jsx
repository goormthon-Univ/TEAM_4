import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// height는 추후 수정 필요 시 수정
const Container = styled.div`
  width: 100%;
  height: 1024px;
  position: fixed;
`;
const Header = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px 20px 10px 20px;
  background: #00ff33;
`;

const Home = () => {
  return (
    <Container>
      <Header></Header>
    </Container>
  );
};
export default Home;
