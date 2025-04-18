import React, { useState } from "react";
import axios from "axios";
import ResultCard from "./components/ResultCard";

const App = () => {
  const [numberId, setNumberId] = useState("e");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:9876/numbers/${numberId}`
      );
      setResult(response.data);
    } catch (error) {
      alert("Error fetching data. Please check backend is running.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🔢 Average Calculator</h1>
      <select value={numberId} onChange={(e) => setNumberId(e.target.value)}>
        <option value="e">Even</option>
        <option value="f">Fibonacci</option>
        <option value="r">Random</option>
        <option value="p">Prime</option>
      </select>
      <button onClick={handleFetch} style={{ marginLeft: "10px" }}>
        Fetch Numbers
      </button>

      {loading && <p>Loading...</p>}

      {result && <ResultCard data={result} />}
    </div>
  );
};

export default App;
