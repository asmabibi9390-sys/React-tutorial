import { useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [symbolAllowed, setSymbolAllowed] = useState(true);

  function generatePassword() {
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      characters += "0123456789";
    }

    if (symbolAllowed) {
      characters += "!@#$%^&*";
    }

    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * characters.length
      );

      newPassword += characters[randomIndex];
    }

    setPassword(newPassword);
  }

  return (
    <div className="password-generator">

      <h1>Password Generator</h1>

      <input
        type="text"
        value={password}
        readOnly
        placeholder="Your password"
      />

      <button onClick={generatePassword}>
        Generate Password
      </button>

      <div>
        <label>
          Length:
          <input
            type="number"
            min="4"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() =>
              setNumberAllowed(!numberAllowed)
            }
          />
          Numbers
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={symbolAllowed}
            onChange={() =>
              setSymbolAllowed(!symbolAllowed)
            }
          />
          Symbols
        </label>
      </div>

    </div>
  );
}

export default PasswordGenerator;