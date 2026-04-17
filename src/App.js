import "./styles.css";
import { useState } from "react";

const data = [
  {
    name: "India",
    value: "IN",
    cities: ["mumbai", "delhi"]
  },
  {
    name: "Unites Kingdom",
    value: "UK",
    cities: ["london", "amstredam"]
  },
  {
    name: "America",
    value: "USA",
    cities: ["Texas", "New York"]
  }
];

export default function App() {
  const [country, setCountry] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    let temp = e.target.value;
    setCountry(temp);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <select onChange={handleChange}>
        {data.map((item) => {
          return <option value={item.name}>{item.name}</option>;
        })}
      </select>
      <select>
        {data.map((item) => {
          return <option value={item.name}>{item.name}</option>;
        })}
      </select>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
