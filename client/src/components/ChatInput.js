import React from "react";

const ChatInput = ({value,sendFunction, handleFunction }) => {
  return (
    <div
      className="chat-input-box"
      onKeyDown={sendFunction}
      style={{
        width: "98%",
        backgroundColor: "var(--black--) ",
        position: "absolute",
        bottom: "25px",
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        left: "0",
        right: "0",
      }}
    >
      <input
        type="text"
        className="text-input"
        placeholder="Type your message..."
        value={value}
        onChange={handleFunction}
        style={{
          color: "whitesmoke",
          width: "90%",
          padding: "10px",
          height: "35px",
          borderRadius: "25px",
          marginRight: "6px",
          border: "none",
          backgroundColor: "var(--darkgray--)",
        }}
      />
      <button
        className="send"
        type="submit"
        style={{
          padding: "5px",
          borderRadius: "50%",
          border: "none",
          color: "whitesmoke",
          fontSize: "15px",
          backgroundColor: "var(--blue--)",
        }}
      >
        {/*<i className="fa-sharp fa-solid fa-paper-plane" />*/}
      </button>
    </div>
  );
};
export default ChatInput