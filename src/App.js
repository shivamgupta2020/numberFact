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
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    fetch(`http://numbersapi.com/${number}/${selectedOption}`)
      .then((response) => response.text())
      .then((result) => {
        setQuote(result);
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        id="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <select
        id="option"
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
      >
        {OPTIONS.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

      <button id="click" onClick={getQuote}>Click Me</button>
      <div id="result">{quote}</div>
    </div>
  );
}

export default App;
