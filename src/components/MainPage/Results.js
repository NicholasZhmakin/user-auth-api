import React from "react";
import ResultsItem from "./ResultsItem";

const Results = () => {
  return (
    <div className="results">
      <h5>
        Найдено <span>(192 Услуги)</span>
      </h5>
      <div className="results__block">
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
      </div>
    </div>
  );
};

export default Results;
