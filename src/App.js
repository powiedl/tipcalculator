import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(100);
  const [yourPercent, setYourPercent] = useState(5);
  const [friendPercent, setFriendPercent] = useState(5);

  function Reset() {
    setBill(100);
    setYourPercent(0);
    setFriendPercent(0);
  }

  const yourTip = (bill * yourPercent) / 100;
  const friendTip = (bill * friendPercent) / 100;
  const tip = Math.round((yourTip + friendTip) * 50) / 100;
  const total = bill + tip;
  return (
    <div className="App">
      <Bill bill={bill} onChange={setBill} />
      <ChoosePercent value={yourPercent} onChange={setYourPercent}>
        How did you like the service?
      </ChoosePercent>
      <ChoosePercent value={friendPercent} onChange={setFriendPercent}>
        How did your friend like the service?
      </ChoosePercent>
      <ShowTip>
        You pay ${total} ( ${Number(bill)} + ${tip} tip)
      </ShowTip>
      <ResetButton onClick={Reset}>Reset</ResetButton>
    </div>
  );
}

function Bill({ bill, onChange }) {
  return (
    <div>
      <label htmlFor="bill">How much was the bill?</label>
      <input
        value={bill}
        onChange={(e) => onChange(Number(e.target.value))}
        name="bill"
      />
    </div>
  );
}

function ChoosePercent({ onChange, value, children }) {
  return (
    <div>
      {children}
      <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        <option value={0}>Bad (0%)</option>
        <option value={5}>Ok (5%)</option>
        <option value={10}>Good (10%)</option>
        <option value={20}>Amazing (20%)</option>
      </select>
    </div>
  );
}

function ShowTip({ children }) {
  return <h1>{children}</h1>;
}

function ResetButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default App;
