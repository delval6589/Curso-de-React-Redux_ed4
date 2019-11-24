import React, { useState, Fragment } from "react";

export const Task = props => {
  const toClassName = classesConfig =>
    Object.entries(classesConfig)
      .filter(([_, isPresent]) => isPresent)
      .map(([className]) => className)
      .join(" ");

  const [text, setText] = useState(props.children || "");
  const [editing, setEditing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleCompletion = () => {
    setCompleted(!completed);
  };

  const handleTextChange = ev => {
    setText(ev.currentTarget.value);
  };

  const startEditing = () => {
    setEditing(true);
  };

  const endEditing = () => {
    if (!text) {
      props.onRemove();
    }

    setEditing(false);
  };

  const handleKeyDown = ev => {
    const isEnter = event => event.keyCode === 13;
    if (!isEnter(ev)) {
      return;
    }

    ev.preventDefault();
    endEditing();
  };

  return (
    <li className="task-row">
      <div className="task-text">
        {editing ? (
          <input
            className="task-edit-input"
            onChange={handleTextChange}
            value={text}
            onBlur={endEditing}
            onKeyDown={handleKeyDown}
            autoFocus={true}
          />
        ) : (
          <Fragment>
            <input
              type="checkbox"
              className="task-checkbox"
              checked={completed}
              onChange={handleCompletion}
            />
            <label
              className={"task-label " + toClassName({ completed })}
              onDoubleClick={startEditing}
            >
              {text}
            </label>
          </Fragment>
        )}
      </div>
      <button className="remove-button" onClick={props.onRemove}>
        X
      </button>
    </li>
  );
};
