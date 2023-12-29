import React from "react";
import classes from "../Chatpage.module.css"

import Sidedrawer from "../components/Sidedrawer";
import Chatmsgs from "../components/Chatmsgs";
import Chatusers from "../components/Chatusers";
import Chatmessages from "../components/Chatmessages";
const Chatpage = () => {
  return (
    <body className={classes.box}>
      <div id="root">
        <div className="container">
          <div
            className="app"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Chatusers/>

           { /*<Sidedrawer />*/}
          {/* <Chatmsgs/>*/}
          <Chatmessages/>
           
          </div>
        </div>
      </div>
    </body>
  );
};

export default Chatpage;
