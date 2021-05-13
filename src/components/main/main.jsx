import React from 'react';
import Header from '../header/header';
import Promo from '../promo/promo';
import Converter from '../converter/converter';
import Footer from '../footer/footer';

const Main = () => {
  return (<>
    <Header></Header>
    <main>
      <Promo></Promo>
      <Converter></Converter>
    </main>
    <Footer></Footer>
  </>
  );
};
export default Main;
