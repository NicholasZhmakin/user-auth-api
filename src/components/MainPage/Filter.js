import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__header">
        <h5> Фильтры</h5>
        <p>Очистить</p>
      </div>

      <div className="filter__category">
        <p>
          Категории <span>(4)</span>
        </p>
        <form action="">
          <input placeholder="Название" type="text" />
          <span>+</span>
        </form>

        <div className="filter__key">
          <span>#Логотип</span>
          <span>#Landing-page</span>
          <br />
          <br />
          <span>#Промо-сайт</span>
          <span>
            <i className="fas fa-window-close"></i>
          </span>
        </div>
      </div>
      <div className="filter__price">
        <p>Стоимость</p>
        <form action="">
          <div className="filter__price-grid">
            <select name="" id="">
              <option value="USD">USD</option>
            </select>
            <input placeholder="от" type="number" />
            <input placeholder="до" type="number" />
          </div>
          <div className="filter__price-grid-range">
            <input type="range" />
            <input type="range" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
