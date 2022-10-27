import { useState } from "react";
const Num = () => {
  const [number, setNumber] = useState("");

  function handleChange(number) {
    setNumber(number);
  }
  return (
    <div className="App">
      <h1>Number Facts</h1>
      <input type = "text" placeholder = "Enter a number" onChange={(event)=>(handleChange(event.target.value))} /><br></br>
    </div>
  );
};

export default {Num,number};
