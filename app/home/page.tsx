"use client";
import { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
const page = () => {
  let getInfFromLocalge = JSON.parse(localStorage.getItem("fullName")!);
  const [styleBoolen, setstyleBoolen] = useState(false);
  const [inputValue, setInputvalue] = useState("");

  const styleClick = () => {
    setstyleBoolen(true);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(inputValue);
    try {
      let res = await axios.post(
        "https://65733ccd192318b7db41caca.mockapi.io/api/v1/Messages",
        { getInfFromLocalge, inputValue } // Send the message to the API
      );
      let data = res.data;
      console.log(data);
    } catch (err) {
      console.log("Error sending message:", err);
    }
  };

  return (
    <div>
      <header>
        <h2>{getInfFromLocalge}</h2>
      </header>
      <main className="flex-class">
        <aside onClick={styleClick}>
          <div className="peoples-contacts">
            <div className="contact flex-class" onClick={styleClick}>
              <img src="./photo_2022-12-16_23-36-33.jpg" alt="Eror" />
              <div className="texts">
                <h2>Modest Group</h2>
                <span>Last Message: asdad</span>
              </div>
            </div>
          </div>
        </aside>
        {styleBoolen ? (
          <div
            className="messages"
            style={
              styleBoolen ? { display: "inline-block" } : { display: "none" }
            }
          >
            <form
              className="flex-class"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                type="text"
                placeholder="Write message"
                onChange={(e) => {
                  setInputvalue(e.target.value);
                }}
              />
              <button>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="start-message">
            <h2>Select a chat to start mesaging</h2>
          </div>
        )}
      </main>
    </div>
  );
};

export default page;
