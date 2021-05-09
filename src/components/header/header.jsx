import React from 'react';
import login from './../../assets/img/icons/icon-login.svg';
import './header.scss';

const Header = () => {
  return <header className="header">
  <div className="header__container container">
    <a className="header__link-logo" href="/">
      <img className="header__logo" width="149px" height="25px" src="./img/logo.png" alt="Логотип Лига Банк"></img>
    </a>
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
        <a className="header-nav-user__link" href="/">
          <img className="header-nav-user__icon" width="20px" height="22px" src={login} alt="Иконка войти"></img>
          Войти в Интернет-банк
          </a>
      </div>
    </nav>
  </div>
</header>
}

export default Header;