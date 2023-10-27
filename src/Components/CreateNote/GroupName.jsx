import React  from "react";

const GroupName = () => {
  const prevData = JSON.parse(localStorage.getItem("groups")) || [];
 

  return (
    <>
      {prevData.map((data) => {
        return (
          <div className="group" key={data.groupName}>
            <h1
              className="group-icon"
              style={{ backgroundColor: data.groupColor }}
            >
              {data.groupName.charAt(0) +
                data.groupName.charAt(Math.floor(Math.random() * data.groupName.length))}
            </h1>
            <h2 className="group-name">{data.groupName}</h2>
          </div>
        );
      })}
    </>
  );
};

export default GroupName;
