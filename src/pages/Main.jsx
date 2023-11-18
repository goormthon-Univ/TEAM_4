import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import { findTeamList, addTeamTopic, joinTeam, invite } from "../api/team";
import { addTeam } from "../api/team";
import Ing from "../components/main/Ing";

const Container = styled.div`
  width: 100%;
  min-width: 1276px;
  height: 1024px;

  overflow-x: hidden;
  overflow-y: hidden;
`;

//중간
const Middle = styled.div`
  position: absolute;
  margin-top: 20px;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BlueContainer = styled.div`
  width: 61%;
  height: auto;

  margin-bottom: 80px;
  padding: 23px 0.5% 20px 0.6%;
  flex-shrink: 0;

  border-radius: 40px;
  background: rgb(221, 229, 251);
`;

const TextBox = styled.div`
  width: 90%;
  height: 43px;

  margin-top: 17px;
  margin-left: 34px;
`;

const WelcomeText = styled.span`
  wdith: 500px;
  height: 30px;

  color: var(--Mono-5, #404040);
  font-family: SUIT-SemiBold;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const ButtonBox = styled.div`
  width: 99.7%;
  height: 80px;

  margin-top: 16px;
  padding: 6px;
`;
const AddCloudBtn = styled.button`
  width: 30%;
  height: 70px;

  margin-right: 10px;
  flex-shrink: 0;

  color: var(--Mono-5, #404040);
  font-family: SUIT-Bold;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  border: none;
  border-radius: 24px;
  background: var(--Skyblue-20, rgb(199, 222, 251));

  &:active {
    background: var(--Skyblue-50, rgb(179, 210, 255));
  }
`;
const NewTeamBtn = styled.button`
  width: 68%;
  height: 70px;
  flex-shrink: 0;

  color: var(--Mono-5, #404040);
  font-family: SUIT-Bold;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */

  border: none;
  border-radius: 24px;
  background: var(--Blue-20, rgb(203, 217, 251));

  &:active {
    background: var(--Skyblue-50, rgb(187, 206, 250));
  }
`;

//모달 새로운 팀 추가 선택시
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: 450px;
  height: 600px;
  flex-shrink: 0;

  border-radius: 20px;
  opacity: 0.8;
  background: var(--Blue-70, rgb(150, 179, 255));
`;
const ModalTitle = styled.div`
  margin-top: 54px;
  margin-bottom: 90px;

  padding-left: 31.8%;

  color: var(--White, #fafafa);
  font-family: SUIT-Bold;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;
const ModalImage = styled.div`
  width: 200px;
  height: 200px;
  flex-shrink: 0;

  margin: 0px auto;
  border-radius: 30px;
  opacity: 0.7;

  background-size: 100%;
  background-repeat: no-repeat;
`;
const InputTeamName = styled.input`
  margin-left: 80px;
  margin-top: 20px;

  display: inline-flex;
  padding: 10px 68px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-family: SUIT;

  border: none;
  border-radius: 50px;
  background: var(--White, #fafafa);
`;
const NextBtn = styled.button`
  display: flex;
  width: 420px;

  margin-left: 15px;
  margin-top: 110px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: #fafafa;
  font-family: SUIT-Bold;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */

  border: none;
  border-radius: 10px;
  background: var(--Blue-70, rgba(40, 100, 255, 0.7));

  &:active {
    background: rgb(50, 107, 255);
  }
`;

//아이콘 선택
const ImageContainer = styled.div`
  position: absolute;

  top: 150px;
  left: 60px;

  padding: 10px 7px 10px 7px;

  width: 300px;
  height: 210px;
  flex-shrink: 0;

  border-radius: 20px;
  background: var(--White, #fafafa);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const ImageOption = styled.img`
  cursor: pointer;
  margin: 10px;
  width: 50px;
  height: 50px;
`;

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
  "/images/10.png",
  "/images/11.png",
  "/images/12.png",
];

//1-2
const InputTeamTopic = styled.input`
  margin-left: 80px;
  margin-top: 20px;

  display: inline-flex;
  padding: 10px 68px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-family: SUIT;

  border: none;
  border-radius: 50px;
  background: var(--White, #fafafa);
`;
const InputTopicDescript = styled.input`
  margin-left: 80px;
  margin-top: 20px;

  display: inline-flex;
  padding: 10px 68px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-family: SUIT;

  border: none;
  border-radius: 50px;
  background: var(--White, #fafafa);
`;
const GetTeamName = styled.div`
  width: auto;
  height: 30px;

  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--White, #fafafa);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
`;

//isModal2Open에 해당하는 모달2
const InputEmail = styled.input`
  display: flex;
  width: 260px;
  height: 35px;

  margin-top: -25px;
  margin-left: 39px;
  padding: 10px 50px 10px 80px;

  justify-content: center;
  align-items: center;
  gap: 8px;

  flex-shrink: 0;

  border: none;
  border-radius: 10px;
  background: #fff;
`;
const Modal2ContentTex = styled.div`
  margin-top: 21px;
  margin-left: 39px;

  color: var(--White, #fafafa);
  font-family: SUIT-Bold;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
`;
const Modal2EmailContainer = styled.div`
  overflow-y: auto;

  margin-left: 40px;
  margin-top: 10px;

  padding: 5px;

  width: 380px;
  height: 220px;
`;

const EmailBox = styled.div`
  position: relative;
  width: 100%;
  height: 40px;

  margin-bottom: 3.7px;
`;
const Email = styled.span`
  display: inline-flex;
  height: 16px;
  padding: 10px 20px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  color: var(--Blue-100, #2864ff);
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */

  border-radius: 10px;
  background: var(--White, #fafafa);
`;
const DeleteBtn = styled.button`
  position: absolute;
  right: 0;
  top: 3px;

  display: inline-flex;
  padding: 5px 10px;

  justify-content: center;
  align-items: center;
  gap: 8px;

  color: var(--Blue-100, #2864ff);
  font-family: SUIT-SemiMedium;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */

  border: none;
  border-radius: 10px;
  background: var(--White, #fafafa);
`;

const InviteButton = styled.div`
  display: flex;
  width: 410px;

  margin-left: 13px;
  margin-top: 14px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: #fafafa;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */

  border-radius: 10px;
  background: var(--Blue-70, rgba(40, 100, 255, 0.7));

  &:active {
    background: rgb(50, 107, 255);
  }
`;

//구름 바로 등록하기 모달
const ChooseBoxDiv = styled.div`
  margin-top: -60px;
  margin-bottom: 40px;
  padding-left: 80px;
  width: 100%;
  height: 80px;
`;
const Modal3ChooseBox = styled.select`
  display: inline-flex;
  width: 310px;
  height: 31px;

  margin-bottom: 10px;
  padding: 6px 14px 5px 103px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 86.5px;
  flex-shrink: 0;

  color: var(--Skyblue-100, #0094ff);
  font-family: SUIT-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */

  border: none;
  border-radius: 50px;
  background: var(--White, #fafafa);
`;

const ChooseTeam = Modal3ChooseBox;
const ChooseSub = Modal3ChooseBox;

const InputCloudTitle = styled.input`
  display: inline-flex;

  width: 350px;
  height: 20px;

  margin-left: 30px;
  padding: 10px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;

  color: var(--Mono-3, #848484);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */

  border: none;
  border-radius: 10px;
  background: var(--White, #fafafa);
`;
const InputCloudContent = styled.textarea`
  display: flex;
  resize: none;
  width: 350px;
  height: 200px;

  margin-left: 30px;
  margin-top: 10px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;

  color: var(--Mono-3, #848484);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */

  border: none;
  border-radius: 10px;
  background: var(--White, #fafafa);
`;

const AddCloudNowBtn = styled.button`
  display: flex;
  width: 420px;

  margin-left: 17px;
  margin-top: 10px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: #fafafa;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */

  border: none;
  border-radius: 10px;
  background: var(--Skyblue-20, rgba(0, 148, 255, 0.2));

  &:active {
    background: #6ac1fe;
  }
`;
//모달1,1-2,2,3 끝

const Text = styled.div`
  margin-top: 10px;
  padding-left: 6px;
  color: var(--Mono-5, #404040);
  font-family: SUIT-Bold;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;
const TeamsContainer = styled.div`
  height: auto;
  width: 98.6%;
  padding: 15px 0px 15px 1.6%;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* 왼쪽 정렬 설정 */
  align-items: flex-start; /* 위 정렬 설정 */
`;

const Main = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModal1_2Open, setModal1_2Open] = useState(false);
  const [isModal2Open, setModal2Open] = useState(false);
  const [isModal3Open, setModal3Open] = useState(false);

  const [isChooseImgOpen, setImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [invitedEmail, setInvitedEmail] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");

  const [teamName, setTeamName] = useState("");
  const [teamTopic, setTeamTopic] = useState("");
  const [teamDetail, setTeamDetail] = useState("");

  const navigate = useNavigate();

  const handleTopic = (event) => {
    setTeamTopic(event.target.value);
  };
  const handleDetail = (event) => {
    setTeamDetail(event.target.value);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  // 첫 주제 및 설명에 대한 모달1_2 열기/닫기
  const openModal1_2 = () => {
    let teamId;
    addTeam({
      name: teamName,
      detail: "",
      icon: selectedImage,
    }).then((res) => {
      teamId = res;
      console.log(res);
      console.log(teamId);
      joinTeam({ team: res });
    });

    setModal1_2Open(true);
    setModalOpen(false);
  };

  const handleEmailChange = (event) => {
    setCurrentEmail(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && currentEmail.trim() !== "") {
      setCurrentEmail("");

      invite({
        email: currentEmail,
      });

      setInvitedEmail(currentEmail);
      setCurrentEmail("");
    }
  };

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);

    localStorage.setItem("팀이름", event.target.value);
  };

  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const handleEnterKeyPress = (event) => {
      handleEnterPress(event);
    };

    document.addEventListener("keydown", handleEnterKeyPress);

    const cardRes = Promise.resolve(findTeamList()).then((list) =>
      setCardList(list)
    );
    console.log(cardRes);
    return () => {
      document.removeEventListener("keydown", handleEnterKeyPress);
    };
  }, [currentEmail, invitedEmail]);

  const gotoTeamPage = (teamId) => {
    navigate(`/team-main/${teamId}`);
  };
  const teams =
    cardList &&
    cardList.map((value) => (
      <Ing
        id={value.id}
        title={value.name}
        goormCount={value.goormCount}
        icon={value.icon}
        onClick={() => gotoTeamPage(value.id)}
      />
    ));

  const closeModal1_2 = () => {
    setModal1_2Open(false);
  };

  //이메일로 친구 추가 모달 열기/닫기
  const openModal2 = () => {
    setModal2Open(true);
    closeModal1_2();
  };
  const closeModal2 = () => {
    setModal2Open(false);
  };

  //구름 바로 등록 모달 열기/닫기
  const openModal3 = () => {
    setModal3Open(true);
  };
  const closeModal3 = () => {
    setModal3Open(false);
  };

  //구름 여러개 중 팀 이미지 선택
  const openImages = () => {
    setImage(true);
  };
  const closeImages = () => {
    setImage(false);
  };

  const selectImage = (image) => {
    setSelectedImage(image);
    closeImages();
  };

  const PostTeamTopic = async () => {
    addTeamTopic({
      name: teamTopic,
      detail: teamDetail,
    });

    openModal2();
  };

  return (
    <Container>
      <Header />

      <Middle>
        <BlueContainer>
          <TextBox>
            <WelcomeText>반가워요, </WelcomeText>
            {/* 구르미 자리에 닉네임 받아오기 */}
            <WelcomeText style={{ fontFamily: "SUIT-Bold" }}>
              구르미
            </WelcomeText>
            <WelcomeText>
              님! <br />
            </WelcomeText>
            <WelcomeText>오늘도 힘차게 새로운 구름을 띄워봐요</WelcomeText>
          </TextBox>
          <ButtonBox>
            <AddCloudBtn onClick={openModal3}>구름 바로 등록</AddCloudBtn>
            <NewTeamBtn onClick={openModal}>팀 새로만들기</NewTeamBtn>
          </ButtonBox>

          {/* 구름 바로 등록 클릭 시 열리는 모달 */}
          {isModal3Open && (
            <ModalContainer>
              <ModalContent style={{ background: "rgb(165, 217, 254)" }}>
                {/* 모달 내용 */}
                <ModalTitle>구름 바로 등록하기</ModalTitle>
                <ChooseBoxDiv>
                  <ChooseTeam>
                    <option name="team" value="0" selected>
                      팀을 선택하세요
                    </option>
                    {/* 자기가 속한 팀들이 와야해요 */}
                    <option name="team" value="1">
                      뜬구름
                    </option>
                  </ChooseTeam>

                  <ChooseSub>
                    {/* 그 팀의 주제들이 와야함 */}
                    <option name="sub" value="0" selected>
                      주제를 선택하세요
                    </option>
                  </ChooseSub>
                </ChooseBoxDiv>
                <InputCloudTitle placeholder="구름의 제목을 입력하세요" />
                <InputCloudContent placeholder="구름에 대한 세부 설명을 작성해주세요" />
                <AddCloudNowBtn onClick={closeModal3}>확인</AddCloudNowBtn>
              </ModalContent>
            </ModalContainer>
          )}

          {/* 팀 새로 만들기 클릭 시 모달 */}
          {isModalOpen && (
            <ModalContainer>
              <ModalContent>
                {/* 모달 내용 */}
                <ModalTitle>새로운 팀 만들기</ModalTitle>
                <ModalImage
                  onClick={openImages}
                  style={{
                    backgroundImage: selectedImage
                      ? `url(${process.env.PUBLIC_URL + selectedImage})`
                      : `url(${process.env.PUBLIC_URL}/images/Add.png)`,
                  }}
                ></ModalImage>
                {isChooseImgOpen && (
                  <ImageContainer>
                    {images.map((image, index) => (
                      <ImageOption
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        onClick={() => selectImage(image)}
                      />
                    ))}
                  </ImageContainer>
                )}
                <InputTeamName
                  placeholder="팀 이름을 입력하세요"
                  value={teamName}
                  onChange={handleTeamNameChange}
                ></InputTeamName>

                {/* ... */}
                <NextBtn onClick={openModal1_2}>다음</NextBtn>
              </ModalContent>
            </ModalContainer>
          )}

          {isModal1_2Open && (
            <ModalContainer>
              <ModalContent>
                {/* 모달 내용 */}
                <ModalTitle style={{ marginBottom: "40px" }}>
                  새로운 팀 만들기
                </ModalTitle>
                <ModalImage
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + selectedImage
                    })`,
                  }}
                ></ModalImage>
                {isChooseImgOpen && (
                  <ImageContainer>
                    {images.map((image, index) => (
                      <ImageOption
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        onClick={() => selectImage(image)}
                      />
                    ))}
                  </ImageContainer>
                )}
                {/* 팀이름 받아오기 */}
                <GetTeamName>{teamName}</GetTeamName>
                <InputTeamTopic
                  value={teamTopic}
                  placeholder="첫 주제를 입력하세요"
                  onChange={handleTopic}
                ></InputTeamTopic>
                <InputTopicDescript
                  value={teamDetail}
                  placeholder="주제에 대한 간단한 설명을 입력하세요"
                  onChange={handleDetail}
                ></InputTopicDescript>
                {/* ... */}
                <NextBtn style={{ marginTop: "70px" }} onClick={PostTeamTopic}>
                  다음
                </NextBtn>
              </ModalContent>
            </ModalContainer>
          )}

          {isModal2Open && (
            <ModalContainer>
              <ModalContent style={{ height: "560px", width: "465px" }}>
                {/* Modal2 내용 */}
                <ModalTitle style={{ paddingLeft: "160px" }}>
                  멤버 초대하기
                </ModalTitle>
                <InputEmail
                  type="email"
                  placeholder="초대할 멤버의 이메일을 입력하세요"
                  value={currentEmail}
                  onChange={handleEmailChange}
                  onKeyPress={handleEnterPress}
                />
                <Modal2ContentTex>초대된 멤버</Modal2ContentTex>
                <Modal2EmailContainer>
                  {invitedEmail && (
                    <EmailBox>
                      <Email>{invitedEmail}</Email>
                    </EmailBox>
                  )}
                </Modal2EmailContainer>

                <InviteButton onClick={closeModal2}>확인</InviteButton>
              </ModalContent>
            </ModalContainer>
          )}

          <Text>참여하는 팀</Text>
          <TeamsContainer>{teams}</TeamsContainer>
        </BlueContainer>

        <div>
          <img src="./images/BottomLogo.png" style={{ width: "130px" }} />
        </div>
      </Middle>
    </Container>
  );
};
export default Main;
