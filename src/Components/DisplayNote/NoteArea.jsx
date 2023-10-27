import React from "react";
import "./NoteArea.css";
import Footer from "./Footer";
import bg_img from "../../Assets/bg-img.png";

const NoteArea = () => {
  return (
    <>
      <div id="note-container">
        <div id="note-area">
          <img src={bg_img} alt="bg-img" />
          <h1>Pocket notes</h1>
          <p>
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NoteArea;
