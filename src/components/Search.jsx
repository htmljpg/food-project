import { useState } from "react";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="input-field col s12">
      <input
        type="search"
        placeholder="Search"
        value={value}
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btn"
        style={{ position: "absolute", top: 0, right: 0 }}
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
}

export { Search };
