import React from "react";

const ResultsItem = () => {
  return (
    <div className="results__item">
      <div className="results__item-info">
        <h3>Дизайн сайта UI и UX</h3>
        <p>
          Рекламные компании говорят, что реклама необходима и важна. Он
          информирует людей о новых продуктах. Рекламные щиты на улице делают
          нашу среду яркой.
        </p>
        <div>
          <span>#Landing-page</span>
          <span>#Логотип</span>
          <span>#Промо-сайт</span>
        </div>
      </div>
      <div className="results__item-price">
        <p>1 840$</p>
        <small>1-2 месяца</small>
      </div>
    </div>
  );
};

export default ResultsItem;
