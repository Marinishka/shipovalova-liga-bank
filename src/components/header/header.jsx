import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../../const';
import login from './../../assets/img/icons/icon-login.svg';

const Header = () => {
  return <header className="header">
    <div className="header__container container">
      <Link className="header__link-logo" to={Routes.MAIN}>
        <img className="header__logo" width="149px" height="25px" src="./img/logo.png" alt="Логотип Лига Банк"></img>
      </Link>
      <nav className="header__nav header-nav">
        <ul className="header-nav__list header-nav-list">
          <li className="header-nav-list__item">
            <a className="header-nav-list__link" href="/">Услуги</a>
          </li>
          <li className="header-nav-list__item">
            <a className="header-nav-list__link" href="/">Рассчитать кредит</a>
          </li>
          <li className="header-nav-list__item">
            <a className="header-nav-list__link header-nav-list__link--active" href="/">Конвертер валют</a>
          </li>
          <li className="header-nav-list__item">
            <a className="header-nav-list__link" href="/">Контакты</a>
          </li>
          <li className="header-nav-list__item">
            <a className="header-nav-list__link" href="/">Задать вопрос</a>
          </li>
        </ul>
        <div className="header-nav__user header-nav-user">
          <Link className="header-nav-user__link" to={Routes.MAIN}>
            <img className="header-nav-user__icon" width="20px" height="22px" src={login} alt="Иконка войти"></img>
          Войти в Интернет-банк
          </Link>
        </div>
      </nav>
    </div>
  </header>;
};

export default Header;
