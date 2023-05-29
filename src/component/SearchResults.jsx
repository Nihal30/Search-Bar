import React from "react";
import "./SearchResults.css";
import ResultsData from "./ResultsData";

const SearchResults = ({results}) => {
  return (
    <div className="results-list">
    {
        results.map((results, id)=>{
            return <ResultsData results={results}  key={id} />
        })
    }
    </div>
  ); 
};

export default SearchResults;
