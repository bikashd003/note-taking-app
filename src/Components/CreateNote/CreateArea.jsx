import React,{useState} from "react";
import "./CreateArea.css";
import Heading from "./Heading";
import ShowPopUp from "./ShowPopUp";
import GroupName from "./GroupName";

const CreateArea = () => {
  const[popup,setPopup]=useState(false)
  const ClosePopup=()=>setPopup(false)
  return (
    <>
      <div id="create-container">
        <Heading />
        <div id="create-area">
          <button className="insert-note" onClick={()=>setPopup(true)}>
            <span>+</span>Create Notes group
          </button>
        </div>
       {popup && <ShowPopUp closePopup={ClosePopup}/>}
       <GroupName />
      </div>
    </>
  );
};

export default CreateArea;
