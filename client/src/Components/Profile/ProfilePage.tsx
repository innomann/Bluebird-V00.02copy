import React, { useState } from "react";
import styled, { css } from "styled-components";

import { FaLocationDot } from "react-icons/fa6";

import { MdCake } from "react-icons/md";
import ProfileAvatar from "./ProfileAvatar"
import ProfileFeed from "./ProfileFeed";
import { MdCameraAlt } from "react-icons/md";
import EditInfoModal from "./EditInfoModal";
import AddProfilePic from "./AddProfilePic";
import Avatar from "@mui/material/Avatar";




const ProfilePage: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowx, setModalShowx] = useState(false);
  return (
    <Container>
      <Banner>
        <EditCamera>
          <MdCameraAlt style={{ fontSize: "30px" }} />
        </EditCamera>

        <Avatar
          onClick={() => setModalShowx(true)}
          className="m-auto"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            position: "absolute",
            bottom: "max(-60px, -10vw)",
            left: "15px",
            border: "3.75px solid #FFFFFF",
          }}
          src={
            "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          }
          alt="Profile"
        />
      </Banner>

      <ProfileData>
        <Button onClick={() => setModalShow(true)}>
          <EditButton outlined>Edit Profil</EditButton>
        </Button>

        <h1>Lilian Dias</h1>
        <h2>@diaslilian</h2>

        <p>Front-End Developer</p>

        <ul>
          <li>
            <FaLocationDot />
            Recife, Brasil
          </li>
          <li>
            <MdCake />
            Nascido(a) em 25 de maio
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>97</strong>
          </span>
          <span>
            <strong>834 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <EditInfoModal modalShow={modalShow} onHide={() => setModalShow(false)} />
      <AddProfilePic
        modalShowx={modalShowx}
        onHide={() => setModalShowx(false)}
      />

      <ProfileFeed />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;
  {/*border: 1px solid lightgray;*/}
  {/*border-radius: 15px;*/}

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);
  background-image: url("https://res.cloudinary.com/mindflowingblog/image/upload/v1/media/defaults/cover.jpg");
  position: relative;
`;



export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: #7a7a7a;
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: #7a53c4;
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: #7a7a7a;
      display: flex;
      align-items: center;

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;
const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(FaLocationDot)`
  ${iconCSS}
`;

export const CakeIcon = styled(MdCake)`
  ${iconCSS}
`;


export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: #7a7a7a;

    & + span {
      margin-left: 20px;
    }
  }
`;

interface Props {
  outlined?: boolean;
}

export const Button = styled.button<Props>`
  background: ${(props) => (props.outlined ? "transparent" : "#7a53c4")};
  color: ${(props) => (props.outlined ? "var(--twitter)" : "#D9D9D9")};
  border: ${(props) => (props.outlined ? "1px solid " : "none")};
  border: "solid 1px #0c66c2",

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) => (props.outlined ? "#0c66c2" : "#744fbb;")};
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

const EditCamera = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  /* opacity: 80%; */
  background-color: white;
  color: rgb(9, 102, 194);
  border-radius: 50%;
  margin: 10px;
`;


export default ProfilePage;
