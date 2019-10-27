import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/logout";
import { connect } from "react-redux";
import * as edit from "../../actions/edit";

const Navbar = ({ onLogout, onEditAgain }) => {
  const [dropdown, setDropdown] = useState({
    isClick: false
  });

  const handleClick = () => {
    setDropdown({
      ...dropdown,
      isClick: !dropdown.isClick
    });
  };
  return (
    <nav className="navigation">
      <div className="navigation__header">
        <a className="navigation__brand" href="#">
          Exprts
        </a>
        <form className="navigation__serch">
          <i className="fas fa-search"></i>
          <input type="search" placeholder="Поиск экспертов, навыки" />
        </form>
      </div>

      <div className="navigation__body">
        <ul className="navigation__list">
          <li>
            <a href="#">Эксперты</a>
          </li>
          <li>
            <a href="#">Вопросы</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
        </ul>

        <div className="navigation__create">Создать проект</div>

        <div className="navigation__icon">
          <div onClick={handleClick}>
            <i className="fas fa-user"></i>
          </div>

          {dropdown.isClick === true ? (
            <div className="navigation__dropdown">
              <Link
                onClick={() => {
                  onEditAgain();
                }}
                to="/cabinet"
              >
                Личный кабинет
              </Link>
              <Link
                to="/login"
                onClick={() => {
                  onLogout();
                }}
              >
                Выйти
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout()),
    onEditAgain: () => dispatch(edit.editAgain())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
