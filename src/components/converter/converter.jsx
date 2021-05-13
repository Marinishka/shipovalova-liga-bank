import React from 'react';
import ConverterForm from '../converter-form/converter-form';
import ConverterHistory from '../converter-history/converter-history';

const Converter = () => {
  return <div className="converter container">
    <h2 className="converter__title">Конвертер валют</h2>
    <ConverterForm></ConverterForm>
    <ConverterHistory></ConverterHistory>
  </div>;
};

export default Converter;
