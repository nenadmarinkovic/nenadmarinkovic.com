import React from 'react'
import Toggle from "./Toggle";

function Header(props) {
    return (
        <div className="container">
           <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
        </div>
    )
}

export default Header
