import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import { FaUserCircle } from "react-icons/fa";
import geminiLogo from "../../assets/gemini-logo.png";

const Main = () => {
  const [greetingText, setGreetingText] = useState("");
  const fullGreeting = "How can I help you Today!";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullGreeting.length) {
        setGreetingText(fullGreeting.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const {
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSet,
  } = useContext(Context);

  const handleIconClick = (text) => {
    setInput(text);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <FaUserCircle className="user-icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span
                  style={{
                    background:
                      "-webkit-linear-gradient(16deg, #4b90ff, #ff5546)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Hello,
                </span>
              </p>
              <p>
                <span>{greetingText || ""}</span>
              </p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleIconClick(
                    "Suggest beautiful places to see on an upcoming road trip"
                  )
                }
              >
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleIconClick(
                    "Briefly summarize this concept: urban planning"
                  )
                }
              >
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleIconClick(
                    "Brainstorm team bonding activities for our work retreat"
                  )
                }
              >
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleIconClick(
                    "Improve the readability of the following code"
                  )
                }
              >
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result-container scrollbar-hidden">
            <div className="user-query">
              <FaUserCircle className="user-icon" />
              <p className="query-text">{recentPrompt}</p>
            </div>
            <div className="gemini-response">
              <img src={geminiLogo} alt="" className="gemini-logo" />
              {loading ? (
                <div className="loading-animation">
                  <hr className="loading-bar" />
                  <hr className="loading-bar" />
                  <hr className="loading-bar" />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="response-text"
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <label className="icon-container">
              <img src={assets.gallery_icon} alt="Upload Image" />
              <span className="tooltip-upload">Upload Image</span>
            </label>

            <input
              type="text"
              placeholder="Ask Gemini"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <div className="icon-container">
              <img src={assets.mic_icon} alt="Voice Input" />
              <span className="tooltip-micro">Use Microphone</span>
            </div>

            {input && (
              <div className="icon-container">
                <img
                  onClick={() => onSet()}
                  src={assets.send_icon}
                  alt="Submit"
                />
                <span className="tooltip-submit">Submit</span>
              </div>
            )}
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
