import React from "react";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__back">
        <i className="fas fa-long-arrow-alt-left"></i>
        Назад
      </div>
      <div className="pagination__pages">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>...</span>
        <span>12</span>
        <span>13</span>
      </div>
      <div className="pagination__next">
        Дальше
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
