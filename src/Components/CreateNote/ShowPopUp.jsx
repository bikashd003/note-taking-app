import React, { useEffect, useState } from 'react';

const ShowPopUp = ({ closePopup }) => {

  const [formData, setFormData] = useState({
    groupName: '',
    groupColor: '', 
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleColorClick = (color) => {
    const colorInputs = document.querySelectorAll('.group-color');

    colorInputs.forEach(function (color) {
      color.addEventListener('click', function () {
        color.classList.toggle('selected-color');
        
      });
    });
    setFormData({
      ...formData,
      groupColor: color,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    const newGroup = {
      groupName: formData.groupName,
      groupColor: formData.groupColor,
    };
    savedGroups.push(newGroup);
    localStorage.setItem('groups', JSON.stringify(savedGroups));
    closePopup();
  };

  useEffect(() => {
    const colorInputs = document.querySelectorAll('.group-color');

    colorInputs.forEach(function (color) {
      color.addEventListener('click', function (event) {
        event.preventDefault();
        
      });
    });
    

  }, []);

  return (
    <>
      <div id="popup"></div>
      <form id="popup-content" onSubmit={handleSubmit}>
        <h1>Create New Notes group</h1>
        <div className="insert-group">
          <label htmlFor="group-name">Group Name</label>
          <input
            type="text"
            id="groupName"
            placeholder="Enter your group name...."
            value={formData.groupName}
            onChange={handleInputChange}
          />
        </div>
        <div className="select-color">
          <label>Choose colour</label>
          <div className="color-name">
            {['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'].map((color, index) => (
              <input
                type="color"
                className="group-color"
                key={index}
                value={color}
                readOnly
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>
        </div>
        <button className="create-btn" type="submit">
          Create
        </button>
      </form>
    </>
  );
};

export default ShowPopUp;
