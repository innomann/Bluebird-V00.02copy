import styled from "styled-components";
import StickyBox from "react-sticky-box";
import SideBarList from "./SideBarList";
import FollowSuggestion from "./FollowSuggestion";

const ProfileSidebar: React.FC = () => {
  return (
    <Container >
      <StickyBox>
        <Body>
          <SideBarList
            title="People you may know"
            elements={[
              <FollowSuggestion name="Joana Marcos" nickname="@kikito" />,
              <FollowSuggestion name="Lucas Eduardo" nickname="@balucas" />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  {padding: 57px 24px 200px;}
  margin-top: 3px;

  > div + div {
    margin-top: 15px;
  }
`;
export default ProfileSidebar;
