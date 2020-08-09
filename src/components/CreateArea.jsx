import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [myinput, setmyInput] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.addItem(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }

  function handleInput() {
    setmyInput(true);
  }

  return (
    <div>
      <form className="create-note">
        {myinput && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={handleInput}
          name="content"
          placeholder="Take a note..."
          rows={myinput ? 3 : 1}
          value={note.content}
        />
        {myinput && (
          <Fab type="submit" onClick={handleClick}>
            <AddIcon />
          </Fab>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
