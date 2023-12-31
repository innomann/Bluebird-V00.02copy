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
} from "../config/ChatLogics";

// for socket.io
import io from "socket.io-client";
const ENDPOINT = "https://beta-v0-15-test.vercel.app";
var socket, selectedChatCompare;

const Chatmsgs = (xselectedChat) => {
  const [newMessage, setNewMessage] = useState();
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState();

  const selectedChat = xselectedChat.xselectedChat.SelectedChat._id;

  console.log("Messages in Chatmsgs", messages);

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

        <ChatInput handleFunction={typingHandler} sendFunction={sendMessage} />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  xselectedChat: state.accesschat,
});

export default connect(mapStateToProps)(Chatmsgs);
