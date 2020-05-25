import React, { useState } from "react";
import SimpleTable from "./Example1";
function App() {
  // const [name, setName] = useState("Pavithra");

  // const alertName = () => {
  //   alert(name);
  // };

  // const handleNameInput = e => {
  //   setName(e.target.value);
  // };

  return (
    <div>
      <h3> This is a Functional Component </h3>
      {/* <input
        type="text"
        onChange={handleNameInput}
        value={name}
        placeholder="Your name"
      />
      <button onClick={alertName}> Alert </button> */}
      <SimpleTable />
    </div>
  );
}

export default App;
