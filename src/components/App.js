
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [inputText, setInputText] = useState("");

  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <br />
        <h1>Parent Component</h1>
        <br />
        <br />
        <p>{inputText}</p>
        <div className="child">
          <br />
          <h2>Child Component</h2>
          <br />
          <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
        </div>
    </div>
  )
}

export default App
