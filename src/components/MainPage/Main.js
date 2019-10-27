import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Results from "./Results";
import Pagination from "./Pagination";

const Main = () => {
  return (
    <section className="main">
      <Navbar />
      <div className="main__content">
        <Filter />
        <Results />
      </div>
      <Pagination />
    </section>
  );
};

export default Main;
