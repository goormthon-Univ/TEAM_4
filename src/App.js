import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styled from "styled-components";
import "./Font.css";

//import 페이지
import CreateAcc from "./pages/SignUp";
import LandingPage from "./pages/Landing";
import Login from "./pages/SignIn";

import ManageLead from "./pages/Setting/ManageLead";
import ManageMem from "./pages/Setting/ManageMem";
import SettingMain from "./pages/Setting/SettingMain";

import AddComment from "./pages/Team/AddComment";
import TeamMain from "./pages/Team/TeamMain";

import Main from "./pages/Main";

//각자의 경로는 주석처리 해서 push 하기!!
function App() {
  return (
    <BrowserRouter>
      <Styled />
      <Routes>
        {/* 홍민우 경로 */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-acc" element={<CreateAcc />} />
        <Route path="/team-main/:teamId" element={<TeamMain />} />
        <Route path="/add-comment" element={<AddComment />} />

        {/* 최윤서 경로 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
