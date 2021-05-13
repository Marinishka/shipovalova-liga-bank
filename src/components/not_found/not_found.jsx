import React from 'react';
import Header from './../header/header';
import Footer from './../footer/footer';

const NotFound = () => {
  return <>
    <Header/>
    <div className="container not-found">
      <p>Ошибка 404.Страница не найдена</p>
    </div>
    <Footer/>
  </>;
};

export default NotFound;
