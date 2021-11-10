import React from 'react';

function ResultCardComponent({ arrivalDate, departureDate, arrivalLocation, departureLocation, carrier, price }) {
  const formatDate = (dateTime) => {
    const month = dateTime.month + 1;
    return dateTime ? `${dateTime.dayOfMonth}/${month < 10 ? `0${month}`: month}/${dateTime.year}` : '-';
  };

  const formatTime = (dateTime) => {
    return dateTime ? `${dateTime.hourOfDay}:${dateTime.minute < 10 ? `0${dateTime.minute}` : dateTime.minute}` : '-';
  };

  const formatUrl = (carrier) => {
    const codes = {
      spanair: 'JK',
      klm: 'KL',
      ryanair: 'FR',
      lufthansa: 'LH',
      iberia: 'IB'
    };
    return `https://www.edreams.es/images/onefront/airlines/sm${codes[carrier.toLowerCase()]}.gif`;
  };

  return (<div className="resultCard row">
    <img src={formatUrl(carrier)} alt={carrier} title={carrier} />
    
    <div className="col col-6 col-sm-4">
      <div className="textl">{formatTime(departureDate)}</div>
      <div className="texts">{formatDate(departureDate)}</div>
      <div className="textm">{departureLocation}</div>
    </div>

    <div className="col col-6 col-sm-4">
      <div className="textl">{formatTime(arrivalDate)}</div>
      <div className="texts">{formatDate(arrivalDate)}</div>
      <div className="textm">{arrivalLocation}</div>
    </div>
      
    <div className="col col-12 col-sm-3">
      <div className="textxl text-right">{price} €</div>
    </div>
  </div>);
}

export default ResultCardComponent;