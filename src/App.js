import "./styles.css";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  const getQuote = () => {
    fetch(`http://numbersapi.com/${number}`).
    then((res) => {
      console.log(res.json());
    })
    .catch((e)=>console.log(e))
      
    };
  

  return (
    <div className="App">
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={getQuote}>Click Me</button>
    </div>
  );
}

