import React from "react";

const ResultCard = ({ data }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        background: "#f5f5f5",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <h2>📊 Result Summary</h2>
      <p>
        <strong>Previous Window:</strong> {JSON.stringify(data.windowPrevState)}
      </p>
      <p>
        <strong>New Numbers Fetched:</strong> {JSON.stringify(data.numbers)}
      </p>
      <p>
        <strong>Updated Window:</strong> {JSON.stringify(data.windowCurrState)}
      </p>
      <p>
        <strong>Calculated Average:</strong>{" "}
        <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
          {data.avg}
        </span>
      </p>
    </div>
  );
};

export default ResultCard;
