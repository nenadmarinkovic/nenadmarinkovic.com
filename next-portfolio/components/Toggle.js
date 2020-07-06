import React from "react";

function Toggle(props) {
  return (
    <div className="toggle-container">
       <span style={{ color: props.theme ? "white" : "grey" }}>☾</span>
      <span className="toggle">
        <input
          checked={props.theme}
          onChange={() => props.setTheme((prevMode) => !prevMode)}
          id="checkbox"
          className="checkbox"
          type="checkbox"
        />
        <label htmlFor="checkbox" />
      </span>
      <span style={{ color: props.theme ? "yellow" : "white" }}>☀︎</span>
     
  
    </div>
  );
}

export default Toggle;
