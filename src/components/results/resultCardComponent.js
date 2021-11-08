import React from 'react';

function ResultCardComponent({ arrivalDate, departureDate, arrivalLocation, departureLocation, carrier, price }) {
  const formatDate = (dateTime) => {
    return `${dateTime.dayOfMonth}/${dateTime.month + 1}/${dateTime.year}`;
  };

  const formatTime = (dateTime) => {
    return `${dateTime.hourOfDay}:${dateTime.minute}`;
  };

  return (<div className="resultCard row">
    <div className="col col-4">
      <div>{formatTime(departureDate)}</div>
      <div>{departureLocation}</div>
      <div>{formatDate(departureDate)}</div>
    </div>

    <div className="col col-4">
      <div>{formatTime(arrivalDate)}</div>
      <div>{arrivalLocation}</div>
      <div>{formatDate(arrivalDate)}</div>
    </div>
      
    <div className="col col-4">
      <div>{carrier}</div>
      <div>{price}</div>
    </div>
  </div>);
}

export default ResultCardComponent;