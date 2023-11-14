import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

// height는 추후 수정 필요 시 수정
const Container = styled.div`
  width: 100%;
  min-width: 1276px;
  height: 1024px;

  overflow-x: hidden;
  overflow-y: hidden;
`;

const Header = styled.div`
  width: 100%;
  height: 78px;
  padding: 10px 20px 10px 20px;
  margin-bottom: 5px;

  display: flex;
  align-items: center;
`;

const EngLogo = styled.div``;

const HeaderBtn = styled.div`
  position: absolute;
  right: 2%;
`;
const SeeAlarm = styled.div`
  display: inline-block;
`;
const GoSetting = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

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
`;

//모달
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

  background: var(--White, #fafafa);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.55) inset;

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
`;

//아이콘 선택
const ImageContainer = styled.div`
  position: absolute;

  top: 290px;
  left: 476px;

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

  color: var(--White, #fafafa);
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: var(--Blue-50, rgba(40, 100, 255, 0.5));
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

  color: #fafafa;
  font-family: SUIT-SemiMedium;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */

  border: none;
  border-radius: 20px;
  opacity: 0.7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: var(--Blue-70, rgba(40, 100, 255, 0.7));
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
`;

//~~~~모달

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

    top: ${({ isBelow }) => (isBelow ? "auto" : "50%")};
    bottom: ${({ isBelow }) => (isBelow ? "50%" : "auto")};
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

const ShowMember = styled.div`
  position: absolute;
  z-index: 1;

  top: ${({ isBelow }) => (isBelow ? "100%" : "auto")};
  bottom: ${({ isBelow }) => (isBelow ? "auto" : "100%")};

  left: 50%;

  width: 280px;
  height: 200px;

  transform: translateX(-3%);

  border-radius: 5px;
  padding: 5px;
  opacity: 0.9;

  background: rgba(var(--White-RGB, 255, 255, 255), 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  visibility: hidden;
  transition: opacity 0.3s;
`;

const CountCloud = styled.div`
  display: inline-block;
  vertical-align: 14px;
  width: 54%;
  height: 20px;
  padding: 5px 0px 2px 10px;
  margin-left: 15%;

  color: #fafafa;
  font-family: SUIT-Medium;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */

  gap: 7.355px;
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

const Main = () => {
  const [showMembers, setShowMembers] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModal2Open, setModal2Open] = useState(false);

  const [isChooseImgOpen, setImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [emails, setEmails] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");

  const handleEmailChange = (event) => {
    setCurrentEmail(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && currentEmail.trim() !== "") {
      setEmails([...emails, currentEmail]);
      setCurrentEmail("");
    }
  };
  const handleDeleteEmail = (index) => {
    // 이메일 삭제 로직
    const newEmails = [...emails];
    newEmails.splice(index, 1);
    setEmails(newEmails);
  };

  useEffect(() => {
    const handleEnterKeyPress = (event) => {
      handleEnterPress(event);
    };

    document.addEventListener("keydown", handleEnterKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEnterKeyPress);
    };
  }, [currentEmail, emails]);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal2 = () => {
    setModal2Open(true);
    setModalOpen(false);
  };
  const closeModal2 = () => {
    setModal2Open(false);
  };

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
        <HeaderBtn>
          <SeeAlarm>
            <img
              src="./images/Alarm.png"
              style={{ width: "50px" }}
              alt="알람"
            ></img>
          </SeeAlarm>
          <GoSetting>
            <img
              src="./images/Setting.png"
              style={{ width: "50px" }}
              alt="설정"
            ></img>
          </GoSetting>
        </HeaderBtn>
      </Header>

      <Middle>
        <BlueContainer>
          <TextBox>
            <WelcomeText>반가워요, </WelcomeText>
            <span>
              구르미님!
              <br />
            </span>
            <WelcomeText>오늘도 힘차게 새로운 구름을 띄워봐요</WelcomeText>
          </TextBox>
          <ButtonBox>
            <AddCloudBtn>구름 바로 등록</AddCloudBtn>
            <NewTeamBtn onClick={openModal}>팀 새로만들기</NewTeamBtn>
          </ButtonBox>

          {isModalOpen && (
            <ModalContainer>
              <ModalContent>
                {/* 모달 내용 */}
                <ModalTitle>새로운 팀 만들기</ModalTitle>
                <ModalImage
                  onClick={openImages}
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
                <InputTeamName placeholder="팀 이름을 입력하세요"></InputTeamName>

                {/* ... */}
                <NextBtn onClick={openModal2}>다음</NextBtn>
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
                  {emails.map((email, index) => (
                    <EmailBox>
                      <Email key={index}>{email}</Email>
                      <DeleteBtn onClick={() => handleDeleteEmail(index)}>
                        삭제
                      </DeleteBtn>
                    </EmailBox>
                  ))}
                </Modal2EmailContainer>

                <InviteButton onClick={closeModal2}>확인</InviteButton>
              </ModalContent>
            </ModalContainer>
          )}

          <Text>참여하는 팀</Text>
          <TeamsContainer>
            <Team isBelow>
              <Subject>예시1</Subject>
              <Image
                onMouseEnter={() => setShowMembers(true)}
                onMouseLeave={() => setShowMembers(false)}
              >
                {showMembers && (
                  <ShowMember className="ShowMember">Show Members</ShowMember>
                )}
              </Image>
              <CountCloud>현재 구름 갯수 12개</CountCloud>
            </Team>
          </TeamsContainer>
        </BlueContainer>
      </Middle>
    </Container>
  );
};
export default Main;
