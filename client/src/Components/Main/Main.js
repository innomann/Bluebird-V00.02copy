import styled from "styled-components";
import PostModal from "../Post/PostModal";
import  WriteNewPostDialog  from "../Post/PostMadalNew";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getArticlesAPI } from "../../Redux/actions";
import ReactPlayer from "react-player";
import  Articles  from "./Articles";
import { getPosts } from "../../Redux/actions/postActions";
import { useDispatch } from "react-redux";

const Main = (props) => {
  const [isWriteDialogOpen, setWriteDialogOpen] = useState(false);

  console.log(props.user)
  const dispatch = useDispatch();
  // set modal here to show only when click on button
  //here default state is alwayse close
  const [showModal, setShowModal] = useState("close");

  // use useeffect to retain the article data from firebase to frontend
  useEffect(() => {
    props.getArticles();
  }, []);

   useEffect(() => {
     getPosts(dispatch);
   }, [getPosts]);

  // hide and show the modal
  const handleClick = (e) => {
    e.preventDefault();

    setWriteDialogOpen(!isWriteDialogOpen);

    /* if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      //open state
      case "open":
        setShowModal("close");
        break;
      // close state
      case "close":
        setShowModal("open");
        break;
      //default state
      default:
        setShowModal("close");
        break;
    }*/
  };

  return (
    <>
      {/* ajx fragment and ternary operator to not show  the articles if the articles are not in our firebase */}
      {!props.articles.length === 0 ? (
        <p>There are No Articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {/* user image show from google authentication */}
              {props.user && props.user.imageX ? (
                <img src={props.user.imageX} alt={props.user.displayName} />
              ) : (
                <img
                  src="https://raw.githubusercontent.com/adarshtiwari1998/linkedin-web-app/e518c8fc18f5a2cf58562f134ff3da394d02c17b/public/images/user.svg"
                  alt="user-image"
                />
              )}
              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start a Post
              </button>
            </div>
            <div>
              <button>
                <img
                  src="https://raw.githubusercontent.com/adarshtiwari1998/linkedin-web-app/e518c8fc18f5a2cf58562f134ff3da394d02c17b/public/images/photo-icon.svg"
                  alt="photo-icon"
                />
                <span>Photo</span>
              </button>
              <button>
                <img
                  src="https://raw.githubusercontent.com/adarshtiwari1998/linkedin-web-app/e518c8fc18f5a2cf58562f134ff3da394d02c17b/public/images/video-icon.svg"
                  alt="video-icon"
                />
                <span>Video</span>
              </button>
              <button>
                <img
                  src="https://raw.githubusercontent.com/adarshtiwari1998/linkedin-web-app/e518c8fc18f5a2cf58562f134ff3da394d02c17b/public/images/event-icon.svg"
                  alt="event-icon"
                />
                <span>Event</span>
              </button>
              <button>
                <img
                  src="https://raw.githubusercontent.com/adarshtiwari1998/linkedin-web-app/e518c8fc18f5a2cf58562f134ff3da394d02c17b/public/images/article-icon.svg"
                  alt="article-icon"
                />
                <span>Article</span>
              </button>
            </div>
          </ShareBox>
          {/* Content was here*/}
          {/*<PostModal showModal={showModal} handleClick={handleClick} />*/}
          {isWriteDialogOpen && <WriteNewPostDialog />}
          <Articles />
        </Container>
      )}
    </>
  );
};

// container style
const Container = styled.div`
  grid-area: main;
`;

// maincard/commandcard style
const CommonCard = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 8px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
`;

// share style
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: #fff;

  div {
    button {
      display: flex;
      align-items: center;
      min-height: 48px;
      outline: none;
      border: none;
      background: transparent;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.5;
      font-weight: 600;
      font-size: 14px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.12);
        border-radius: 6px;
      }
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        flex-grow: 1;
        border-radius: 35px;
        margin: 4px 0;
        padding-left: 16px;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        text-align: left;
        cursor: pointer;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }

        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

// article style
const Article = styled(CommonCard)`
  overflow: visible;
  margin: 0 0 8px;
  padding: 0;
`;

// sharedactor style
const SharedActor = styled.div`
  display: flex;
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;

  a {
    display: flex;
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

// description style
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

// sharedimage style
const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

// socialcounts style
const SocialCounts = styled.ul`
  display: flex;
  align-items: flex-start;
  line-height: 1.3;
  margin: 1 16px;
  padding: 8px 0px;
  overflow: auto;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;
      background: transparent;
      border: none;
      outline: none;
    }

    span {
      font-size: 12px;
    }
  }
`;

// socialactions style
const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 40px;
  margin: 0;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    background: none;
    border: none;
    outline: none;
    color: #0a66c2;
    //desktop media queries only
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

// content style
const Content = styled.div`
  text-align: center;
  //loading bar
  & > img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

// redux stuffs for fetch data from firebase to frontend
const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
