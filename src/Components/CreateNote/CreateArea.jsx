import React, { useState,useEffect } from "react";
import "./CreateArea.css";
import Heading from "./Heading";
import ShowPopUp from "./ShowPopUp";
import NotesInput from "../DisplayNote/NotesInput";
import NoteArea from "../DisplayNote/NoteArea";

const CreateArea = () => {
  const [popup, setPopup] = useState(false);
  const [random, setRandom] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null); 
  const ClosePopup = () => setPopup(false);
  const prevData = JSON.parse(localStorage.getItem("groups")) || [];

  const handleGroupClick = (index) => {
    setActiveGroup(index); 
  };
useEffect(() => {
  const rand= Math.floor(Math.random());
  console.log(rand);
  setRandom(rand);
}, [])

  return (
    <>
      <div className="container">
        <div id="create-container">
          <Heading />
          <div id="create-area">
            <button className="insert-note" onClick={() => setPopup(true)}>
              <span>+</span>Create Notes group
            </button>
          </div>
          {popup && <ShowPopUp closePopup={ClosePopup} />}
          <div className="group-container">
            {prevData.map((data, index) => {
              return (
                <div
                  className="group"
                  key={data.groupName}
                  onClick={() => handleGroupClick(index)} 
                  style={
                    activeGroup === index
                      ? { backgroundColor: "#F7ECDC" }
                      : {} 
                  }
                >
                  <h1
                    className="group-icon"
                    style={{ backgroundColor: data.groupColor }}
                  >
                    {data.groupName.charAt(0) +
                      data.groupName.charAt(
                        (random * data.groupName.length)
                      )}
                  </h1>
                  <h2 className="group-name">{data.groupName}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <div className="input-container">
          {activeGroup !== null ? <NotesInput groupIndex={activeGroup}  random={random}/> : <NoteArea />}
        </div>
      </div>
    </>
  );
};

export default CreateArea;
