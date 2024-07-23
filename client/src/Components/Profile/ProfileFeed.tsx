
import styled from "styled-components";
import ProfileTweet from "./ProfileTweet";


const ProfileFeed: React.FC = () => {
    return (
      <Container>
        <Tab>Tweets</Tab>
        <Tweets>
            <ProfileTweet/>
            <ProfileTweet/>
            <ProfileTweet/>
            <ProfileTweet/>
            <ProfileTweet/>
        </Tweets>
      </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid #0c66c2;

  &:hover {
    background: #2a2e4d;
  }
`;

const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;


export default ProfileFeed;