import React from "react";
import ".//Results.css";

const ResultsData = ({ results }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`you clicked on ${results.name}`)}
    >
      {results.name}
    </div>
  );
};

export default ResultsData;
