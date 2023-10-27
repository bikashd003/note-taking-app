import React, { useState } from "react";

const NotesInput = ({ selectedGroup, onSaveNote }) => {
  const [note, setNote] = useState("");

  const handleSaveNote = () => {
    onSaveNote(selectedGroup, note);
    setNote("");
  };

  return (
    <div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />
      <button onClick={handleSaveNote}>Save Note</button>
    </div>
  );
};

export default NotesInput;
