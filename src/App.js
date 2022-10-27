import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

const OPTIONS = [
  { label: "trivia", value: "trivia" },
  { label: "math", value: "math" },
  { label: "date", value: "date" },
  { label: "year", value: "year" },
];

function App() {
  const [number, setNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0].value);

  console.log(selectedOption)

  const getQuote = async () => {
    const res = await fetch(`http://numbersapi.com/${number}`);
    console.log(res.json());
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
      <select value={selectedOption} onChange={e => {setSelectedOption(e.target.value)}}>
        {OPTIONS.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>`

      <button onClick={getQuote}>Click Me</button>
    </div>
  );
}

export default App;
