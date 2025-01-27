import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

function Sidebar() {
  const [extended, setExtended] = useState(false);

  return (
    <div className={`sidebar ${extended ? "" : "collapsed"}`}>
      <div className="top">
      <div className="menu-container">
          <img onClick={() => setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="icon" />
          <span className="tooltip">
            {extended ? "Close menu" : "Expand menu"}
          </span>
          {/* {extended ? (
            <span className="tooltip">Close Sidebar</span>
          ) : null} */}
        </div>
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
          <span className="new-chat-text">New Chat</span>
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className= "bottom-item  recent-item tooltip">
          <img src={assets.question_icon} alt="Help icon"/>
          {extended ? <p>Help</p> : <span className="tooltip">Help</span>}
        </div>
        <div className= "bottom-item  recent-item tooltip">  
          <img src={assets.history_icon} alt="Activity icon"/>
          {extended ? <p>Activity</p> : <span className="tooltip">Activity</span>}
        </div>
        <div className= "bottom-item  recent-item tooltip">
          <img src={assets.setting_icon} alt="Settings icon"/>
          {extended ? <p>Setting</p> : <span className="tooltip">Setting</span>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
