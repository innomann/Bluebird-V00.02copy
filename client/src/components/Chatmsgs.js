import React, { useState, useEffect } from "react";
import ChatInput from "./ChatInput";
import Chatheader from "./Chatheader";
import { connect } from "react-redux";
import axios from "axios";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics"

// for socket.io
import io from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;

const Chatmsgs = (xselectedChat) => {
  const [newMessage, setNewMessage] = useState();
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState();

  const selectedChat = xselectedChat.xselectedChat.SelectedChat._id;

  console.log("Messages in Chatmsgs",messages )
  




  const sendMessage = async (e) => {
    const audio = new Audio(
      "https://github.com/lmoroz/sounds/blob/main/sent.ogg?raw=true"
    );
  

    if (e.key === "Enter" && newMessage) {
      socket.emit("stop typing", selectedChat);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage("");
        const { data } = await axios.post(
          "http://localhost:5000/api/message",
          {
            chatId: selectedChat,
            content: newMessage,
            sender: user.user._id,
          },
          config
        );
        socket.emit("new message", data);
        setMessages([...messages, data]);
        audio.play();
      } catch (err) {
        console.log(err);
        return;
      }
    }
  };

  const typingHandler = (e) => {
    e.preventDefault();
     setNewMessage(e.target.value);
   };

   const fetchAllMessages = async () => {
     console.log("fetchAllMessages  got hitted with", selectedChat);
     if (!selectedChat) return;
     try {
       const config = {
         headers: {
           Authorization: `Bearer ${user.token}`,
         },
       };
       const { data } = await axios.get(
         `http://localhost:5000/api/message/${selectedChat}`,
         config
       );
       setMessages(data);
       console.log("messages", data);
       socket.emit("join chat", selectedChat);
     } catch (err) {
       console.log(err);
       return;
     }
   };




  useEffect(() => {
    fetchAllMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);
 

  useEffect(() => {
    socket = io(ENDPOINT);
    //socket.emit("setup");
  }, []);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("deLinkUser"));
    setUser(userInfo);
    if (userInfo) {
      socket.emit("setup", userInfo.user);
    }
  }, []);


    return (
      <section
        className="section hidden"
        id="chat-room"
        style={{
          width: "61.2%",
          position: "relative",
          alignSelf: "stretch",
          right: "0",
          top: "0",
          bottom: "0",
          margin: "0",
          backgroundColor: "var(--black--)",
          animationName: "slideLeft",
          animationDuration: "1s",
        }}
      >
        <div id="chat-msg-room" style={{ width: "inherit", height: "inherit" }}>
          <Chatheader />
          <div
            id="messages-room"
            style={{
              position: "absolute",
              top: "70px",
              left: "0",
              right: "0",
              padding: "10px",
              width: "100%",
              height: "74vh",
              backgroundColor: "var(--black--)",
              overflowY: "scroll",
              overflowX: "hidden",
              fontSize: "16px",
              lineHeight: "1.7em",
            }}
          >
            <div className="contact-msg msg-box">
              <p
                className="contact msg"
                style={{
                  maxWidth: "50%",
                  width: "fit-content",
                  padding: "12px",
                  margin: "4px",
                  color: "whitesmoke",

                  backgroundColor: "var(--darkgray--) ",
                  borderRadius: "10px 10px 10px 0",
                }}
              >
                Hey, Marshall! How are you? Can you please change the color
                theme of the website to pink and purple?
              </p>
              <p
                className="contact msg"
                style={{
                  maxWidth: "50%",
                  width: "fit-content",
                  padding: "12px",
                  margin: "4px",
                  color: "whitesmoke",

                  backgroundColor: "var(--darkgray--) ",
                  borderRadius: "10px 10px 10px 0",
                }}
              >
                Send me the files please.
              </p>
              <span
                className="msg-time"
                style={{
                  color: "gray",
                  fontSize: "11px",
                  marginBottom: "9px",
                  marginLeft: "10px",
                  display: "block",
                }}
              >
                12:45PM
              </span>
            </div>
            <div
              className="user-msg msg-box"
              style={{
                alignItems: "end",
                marginRight: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                className="user msg"
                style={{
                  maxWidth: "50%",
                  width: "fit-content",
                  padding: "12px",
                  margin: "4px",
                  color: "whitesmoke",
                  backgroundColor: "var(--blue--)",
                  borderRadius: "10px 0 10px 10px",
                }}
              >
                Hey, Marshall! How are you? Can you please change the color
                theme of the website to pink and purple?
              </p>
              <p
                className="user msg"
                style={{
                  maxWidth: "50%",
                  width: "fit-content",
                  padding: "12px",
                  margin: "4px",
                  color: "whitesmoke",
                  backgroundColor: "var(--blue--)",
                  borderRadius: "10px 0 10px 10px",
                }}
              >
                <i className="fa-solid fa-arrow-down" /> filename.json
              </p>
              <span
                className="msg-time"
                style={{
                  color: "gray",
                  fontSize: "11px",
                  marginBottom: "9px",
                  marginLeft: "10px",
                  display: "block",
                }}
              >
                12:45PM
              </span>
            </div>
            <div
              className="contact-msg msg-box"
              style={{
                alignItems: "start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                className="contact msg"
                style={{
                  maxWidth: "50%",
                  width: "fit-content",
                  padding: "12px",
                  margin: "4px",
                  color: "whitesmoke",

                  backgroundColor: "var(--darkgray--) ",
                  borderRadius: "10px 10px 10px 0",
                }}
              >
                Hey, Marshall! How are you? Can you please change the color
                theme of the website to pink and purple?
              </p>
              <span
                className="msg-time"
                style={{
                  color: "gray",
                  fontSize: "11px",
                  marginBottom: "9px",
                  marginLeft: "10px",
                  display: "block",
                }}
              >
                12:45PM
              </span>
            </div>
            <div
              className="user-msg msg-box"
              style={{
                alignItems: "end",
                marginRight: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                className="user msg"
                id="img-msg"
                style={{
                  padding: "0",
                  backgroundColor: "transparent",
                }}
              >
                <img
                  src="https://offsetcode.com/themes/messenger/2.2.0/assets/img/chat/1.jpg"
                  alt="image"
                  className="sent-img"
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "7px",
                    objectFit: "cover",
                    margin: "0.2em",
                  }}
                />
                <img
                  src="https://offsetcode.com/themes/messenger/2.2.0/assets/img/chat/2.jpg"
                  alt="image"
                  className="sent-img"
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "7px",
                    objectFit: "cover",
                    margin: "0.2em",
                  }}
                />
              </p>
              <span
                className="msg-time"
                style={{
                  color: "gray",
                  fontSize: "11px",
                  marginBottom: "9px",
                  marginLeft: "10px",
                  display: "block",
                }}
              >
                12:45PM
              </span>
            </div>
            <div className="contact-msg msg-box">
              <p
                className="contact msg"
                style={{
                  maxWidth: "50%",
                  width: "fit-content",
                  padding: "12px",
                  margin: "4px",
                  color: "whitesmoke",

                  backgroundColor: "var(--darkgray--) ",
                  borderRadius: "10px 10px 10px 0",
                }}
              >
                Hey, Marshall! How are you? Can you please change the color
                theme of the website to pink and purple?
              </p>
              <span
                className="msg-time"
                style={{
                  color: "gray",
                  fontSize: "11px",
                  marginBottom: "9px",
                  marginLeft: "10px",
                  display: "block",
                }}
              >
                12:45PM
              </span>
            </div>
          </div>

          <div>
            {messages &&
              messages.map(
                (message, index) => (
                  console.log("Single sms", message.sender._id),
                  (
                    <div style={{ display: "flex" }} key={message._id}>
                      {isSameSender(messages, message, index, user.user._id) ||
                        isLastMessage(messages, index, user.user._id)}

                      <span
                        style={{
                          backgroundColor:
                            message.sender._id === user.user._id
                              ? "#bee3f8"
                              : "#b9f5d0",
                          borderRadius:
                            message.sender._id !== user.user._id
                              ? "0.8rem 0.8rem 0.8rem 0"
                              : "0.8rem 0.8rem 0 0.8rem",
                          padding: "0.5rem 1rem",
                          maxWidth: "66%",
                          marginLeft: isSameSenderMargin(
                            messages,
                            message,
                            index,
                            user.user._id
                          ),
                          marginTop: isSameUser(
                            messages,
                            message,
                            index,
                            user.user._id
                          )
                            ? 3
                            : 10,
                        }}
                      >
                        {message.content}
                      </span>
                    </div>
                  )
                )
              )}
          </div>

          <ChatInput
            handleFunction={typingHandler}
            sendFunction={sendMessage}
          />
        </div>
      </section>
    );
}


const mapStateToProps = (state) => ({
  xselectedChat: state.accesschat,
});




export default connect(
   mapStateToProps
)(Chatmsgs);