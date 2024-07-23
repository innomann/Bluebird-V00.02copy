
import styled, { css } from "styled-components";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";


const ProfileTweet: React.FC = () =>{
    return (
      <Container>
        <Retweeted>
          Você retweetou
        </Retweeted>
        <Body>
          <Avatar />
          <Content>
            <Header>
              <strong>Rocketseat</strong>
              <span>@rocketseat</span>
              <Dot />
              <time>25 de jul</time>
            </Header>
            <Description>Foguete não tem ré 🚀</Description>
            <ImageContent />

            <Icons>
              <Status>
                <FaRegCommentDots />
                18
              </Status>
              <Status>
                <FaRetweet />
                39
              </Status>

              <Status>
                <FcLike />
                666
              </Status>
            </Icons>
          </Content>
        </Body>
      </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;
const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;



const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

const Avatar = styled.div`
  width: 49px;
  height: 49px;

  border-radius: 50%;
  flex-shrink: 0;
  background: #7a7a7a;

  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const Dot = styled.div`
  background: red;
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: #191c34;
  border-radius: 14px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);

    > svg path {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);

    > svg {
      fill: var(--like);
    }
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;


export default ProfileTweet;