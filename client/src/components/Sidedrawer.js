import React,{ useEffect } from "react";
import { getAllusers } from "../actions/userActions";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";


const Sidedrawer = ({users}) => {
  const dispatch = useDispatch();

  const handleSubmit = (userId) => {
    console.log("handleSubmit clicked");
  };

  useEffect(() => {
    getAllusers(dispatch);
  }, [dispatch]);
    return (
      <section
        className="section"
        id="chat-list"
        style={{
          width: "38%",
          overflowY: "scroll",
          overflowX: "hidden",
          padding: "10px",
          animationName: "slideUp",
          animationDuration: "2s",
        }}
      >
        <div className="chat-list-header">
          <div className="collapse-nav">
            <h2 className="chats" style={{ color: "white" }}>
              Chats
            </h2>
            <span className="collapse-nav-items">
              <i className="fa-solid fa-ellipsis-vertical" />
            </span>
          </div>

          <input
            type="search"
            placeholder="search messages or user"
            className="search-input"
            style={{
              width: "100%",
              marginTop: "0",
              padding: "18px",
              fontSize: "15px",
              fontFamily: "'Arial', 'Helvetica', 'sans-serif'",
              border: "none",
              borderRadius: "25px",
              color: "whitesmoke",
              backgroundColor: "var(--gray--)",
            }}
          />
        </div>

        <div className="chat-box" style={{ marginBottom: "2em" }}>
          <div
            className="chat"
            id="William Wright"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "inherit",
              marginTop: "15px",
              backgroundColor: "var(--black--)",
              fontSize: "15px",
              borderRadius: "13px",
              fontFamily: "'poppins', 'Arial', 'Helvetica', 'sans-serif'",
              padding: "16px",
            }}
          >
            <div
              className="box-one"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                className="profile-pic"
                style={{ marginRight: "10px", position: "relative" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1612214070475-1e73f478188c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
                  alt="contact picture"
                  className="contact-pic"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <span className="online" />
              </div>

              <div
                className="descrip"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span
                  className="name"
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "whitesmoke",
                    marginBottom: "7px",
                    fontFamily: "'Arial', 'Helvetica', 'sans-serif'",
                  }}
                >
                  William Wright
                </span>
                <span
                  className="text"
                  style={{
                    color: "gray",
                    lineHeight: "1.7em",
                    fontSize: "14px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                >
                  Hello! Yeah I'm going to meet a friend of Mine at the
                  department...
                </span>
              </div>
            </div>

            <div
              className="info"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <span
                className="time"
                style={{
                  color: "gray",
                  fontSize: "11px",
                  marginBottom: "9px",
                }}
              >
                12:45PM
              </span>
              <span
                className="msg-count"
                style={{
                  backgroundColor: "var(--blue--)",
                  color: "white",
                  width: "20px",
                  height: "20px",
                  padding: "5px",
                  textAlign: "center",
                  fontSize: "smaller",
                  borderRadius: "50%",
                }}
              >
                4
              </span>
            </div>
          </div>

          {users.map((user) => (
            <div
              className="chat"
              id="Ollie Chandler"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "inherit",
                marginTop: "15px",
                backgroundColor: "var(--black--)",
                fontSize: "15px",
                borderRadius: "13px",
                fontFamily: "'poppins', 'Arial', 'Helvetica', 'sans-serif'",
                padding: "16px",
                cursor: "pointer",
              }}
            >
              <div
                className="box-one"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div
                  className="profile-pic"
                  style={{ marginRight: "10px", position: "relative" }}
                >
                  <img
                    src={
                      user.image
                        ? user.image
                        : "https://img.favpng.com/12/20/1/computer-icons-user-profile-login-avatar-png-favpng-EphX5rTBCrk1QLtEWPmS9h1M9.jpg"
                    }
                    alt="contact picture"
                    className="contact-pic"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <span className="online" />
                </div>
                <div
                  className="descrip"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <span
                    className="name"
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "whitesmoke",
                      marginBottom: "7px",
                      fontFamily: "'Arial', 'Helvetica', 'sans-serif'",
                    }}
                  >
                    <button onClick={handleSubmit()}>button </button>
                    
                    {user.firstname} {user.lastname}
             
                  </span>
                  <span
                    className="text"
                    style={{
                      color: "gray",
                      lineHeight: "1.7em",
                      fontSize: "14px",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    Hello! Yeah I'm going to meet a friend of Mine at the
                    department...
                  </span>
                </div>
              </div>

              <div
                className="info"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                }}
              >
                <span
                  className="time"
                  style={{
                    color: "gray",
                    fontSize: "11px",
                    marginBottom: "9px",
                  }}
                >
                  9:30AM
                </span>
                <span
                  className="msg-count"
                  style={{
                    backgroundColor: "var(--blue--)",
                    color: "white",
                    width: "20px",
                    height: "20px",
                    padding: "5px",
                    textAlign: "center",
                    fontSize: "smaller",
                    borderRadius: "50%",
                  }}
                >
                  2
                </span>
              </div>
            </div>
          ))}

          <div
            className="chat"
            id="Elise Dennis"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "inherit",
              marginTop: "15px",
              backgroundColor: "var(--black--)",
              fontSize: "15px",
              borderRadius: "13px",
              fontFamily: "'poppins', 'Arial', 'Helvetica', 'sans-serif'",
              padding: "16px",
            }}
          >
            <div
              className="box-one"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                className="profile-pic"
                style={{ marginRight: "10px", position: "relative" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=368&q=80"
                  alt="contact picture"
                  className="contact-pic"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <span
                  className="online"
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#40d492",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "9%",
                    right: "0",
                  }}
                />
              </div>
              <div
                className="descrip"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span
                  className="name"
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "whitesmoke",
                    marginBottom: "7px",
                    fontFamily: "'Arial', 'Helvetica', 'sans-serif'",
                  }}
                >
                  Elise Lorna
                </span>
                <span
                  className="text textload"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span
                    className="typing typ1"
                    style={{
                      margin: "0",
                      width: "5px",
                      height: "5px",
                      padding: "5px",
                      marginRight: "3px",
                      backgroundColor: "#333",
                      borderRadius: "50%",
                      animationName: "slide",
                      animationIterationCount: "infinite",

                      marginLeft: "3px",
                    }}
                  />
                  <span
                    className="typing typ2"
                    style={{
                      margin: "0",
                      width: "5px",
                      height: "5px",
                      padding: "5px",
                      marginRight: "3px",
                      backgroundColor: "#333",
                      borderRadius: "50%",
                      animationName: "slide",
                      animationIterationCount: "infinite",
                    }}
                  />
                  <span
                    className="typing typ3"
                    style={{
                      margin: "0",
                      width: "5px",
                      height: "5px",
                      padding: "5px",
                      marginRight: "3px",
                      backgroundColor: "#333",
                      borderRadius: "50%",
                      animationName: "slide",
                      animationIterationCount: "infinite",
                    }}
                  />
                </span>
              </div>
            </div>
            <div
              className="info"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <span
                className="time"
                style={{
                  color: "gray",
                  fontSize: "11px",
                  marginBottom: "9px",
                }}
              >
                7:01PM
              </span>
              <span
                className="msg-count"
                style={{
                  backgroundColor: "var(--blue--)",
                  color: "white",
                  width: "20px",
                  height: "20px",
                  padding: "5px",
                  textAlign: "center",
                  fontSize: "smaller",
                  borderRadius: "50%",
                }}
              >
                1
              </span>
            </div>
          </div>

          <div
            className="loading chat"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "inherit",
              padding: "16px",
              backgroundColor: "black",
              marginTop: "15px",
              borderRadius: "13px",
              cursor: "wait",
            }}
          >
            <div
              className="loading-pic"
              style={{
                width: "60px",
                height: "60px",
                marginRight: "10px",
                backgroundColor: "var(--grayone--)",
                borderRadius: "50%",
                animationName: "slide",
                animationDuration: "3s",
                animationIterationCount: "infinite",
                animationDirection: "reverse",
              }}
            />
            <div className="loading-box" style={{ width: "80%" }}>
              <div
                className="loading-name load"
                style={{
                  backgroundColor: "#333",
                  height: "5px",
                  padding: "4px",
                  borderRadius: "5px",
                  animationName: "slide",
                  animationIterationCount: "infinite",
                }}
              />
              <div
                className="loading-descrip load"
                style={{
                  backgroundColor: "#333",
                  height: "5px",
                  padding: "4px",
                  borderRadius: "5px",
                  animationName: "slide",
                  animationIterationCount: "infinite",
                }}
              />
              <div
                className="loading-info load"
                style={{
                  backgroundColor: "#333",
                  height: "5px",
                  padding: "4px",
                  borderRadius: "5px",
                  animationName: "slide",
                  animationIterationCount: "infinite",
                }}
              />
            </div>
          </div>

          <div
            className="loading chat"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "inherit",
              padding: "16px",
              backgroundColor: "black",
              marginTop: "15px",
              borderRadius: "13px",
              cursor: "wait",
            }}
          >
            <div
              className="loading-pic"
              style={{
                width: "60px",
                height: "60px",
                marginRight: "10px",
                backgroundColor: "var(--grayone--)",
                borderRadius: "50%",
                animationName: "slide",
                animationDuration: "3s",
                animationIterationCount: "infinite",
                animationDirection: "reverse",
              }}
            />
            <div className="loading-box">
              <div
                className="loading-name load "
                style={{
                  width: "60%",
                  marginBottom: "10px",
                  animationDuration: "2s",
                }}
              />
              <div
                className="loading-descrip load"
                style={{ marginBottom: "7px", animationDuration: "3s" }}
              />
              <div className="loading-info load" />
            </div>
          </div>
        </div>
      </section>
    );
}



const mapStateToProps = (state) => ({
  users: state.users.users
});




export default connect(
   mapStateToProps
)(Sidedrawer);