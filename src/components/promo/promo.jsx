import React from 'react';

const Promo = () => {
  return <div className="promo">
    <div className="container">
      <div className="promo__container">
        <h1 className="promo__title">Лига Банк</h1>
        <p className="promo__text">Кредиты на любой случай</p>
        <a className="promo__link" href="/">Рассчитать кредит</a>
        <img className="promo__card promo__card--white" width="335" height="228" src="./img/white_card.png" alt="Белая карта банка"></img>
        <img className="promo__card promo__card--black" width="335" height="228" src="./img/black_card.png" alt="Черная карта банка"></img>
      </div>
    </div>
  </div>;
};

export default Promo;
