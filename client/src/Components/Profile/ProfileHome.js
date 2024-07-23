import ProfileHeader from "./ProfileHeader";
import styled from "styled-components";
import ProfileSidebar from "./ProfileSidebar";


function ProfileHome() {
  return (
    <Container>
      <Content>
        <Layout >
          <div>
            
          </div>
          <ProfileHeader />
          <ProfileSidebar />
        </Layout>
      </Content>
    </Container>
  );
}

// container style
const Container = styled.div`
padding-top: 72px;
max-width: 100%;

`;

// content style
const Content = styled.div`
  max-width: 1078px;
  margin-left: auto;
  margin-right: auto;
`;


// layout style
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
export default ProfileHome;