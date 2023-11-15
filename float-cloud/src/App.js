import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styled from "styled-components";
import "./Font.css";

//import 페이지
import CreateAcc from "./pages/Account/CreateAcc";
import Home from "./pages/Account/Home";
import Login from "./pages/Account/Login";

import ManageLead from "./pages/Setting/ManageLead";
import ManageMem from "./pages/Setting/ManageMem";
import SettingMain from "./pages/Setting/SettingMain";

import AddComent from "./pages/Team/AddComment";
import TeamMain from "./pages/Team/TeamMain";

import Main from "./pages/Main";

//각자의 경로는 주석처리 해서 push 하기!!
function App() {
  return (
    <BrowserRouter>
      <Styled />
      <Routes>
        {/* 홍민우 경로 */}
        <Route path="/" element={<Home />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAcc" element={<CreateAcc />} />

        {/* 최윤서 경로 */}
        <Route path="/SettingMain" element={<SettingMain />} />
        <Route path="/SettingMain" element={<ManageMem />} />
        <Route path="/SettingMain" element={<ManageLead />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
