import React from "react";

const Chatheader = () => {
    return (
      <div
        className="chat-room-header"
        style={{
          padding: "10px",
          position: "absolute",
          width: "100%",
          height: "50px",
          marginTop: "0",
          top: "0",
          left: "0",
          right: "0",
          borderRadius: "0",
          alignItems: "center",
          backgroundColor: "var(--black--)",
        }}
      >
        <div
          className="box-one"
          style={{
            width: "60%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            className="go-back-icon"
            style={{
              color: "whitesmoke",
              marginRight: "15px",
              cursor: "pointer",
              fontSize: "22px",
              width: "30px",
              height: "30px",

              borderRadius: "50%",
              textAlign: "center",
              marginBottom: "7px",
            }}
          >
            <a href="/" >
              <i className="fa-sharp fa-solid fa-arrow-left-long" />
            </a>
          </span>
          <div
            className="profile-pic"
            style={{
              marginRight: "10px",
              position: "relative",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1612214070475-1e73f478188c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
              alt="contactimg"
              className="contact-pic small-contact-pic"
              style={{
                width: "45px",
                height: "45px",

                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            className="descrip"
            style={{
              color: "red",
            }}
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
          </div>
        </div>
        <div
          className="user-options"
          style={{
            display: "none",
          }}
        >
          <span href="#" className="opt-one opt">
            <i className="fa-solid fa-video" />
          </span>
          <span href="#" className="opt-two opt">
            <i className="fa-solid fa-phone" />
          </span>
          <span className="other-opts opt">
            <i className="fa-solid fa-ellipsis-vertical" />
          </span>
        </div>
      </div>
    );
}
export default Chatheader;