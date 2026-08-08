import { useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  function convert() {
    setResult(Number(amount) * 280);
  }

  return (
    <div>
      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        placeholder="Enter USD"
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={convert}>
        Convert to PKR
      </button>

      <h2>{result} PKR</h2>
    </div>
  );
}

export default CurrencyConverter;