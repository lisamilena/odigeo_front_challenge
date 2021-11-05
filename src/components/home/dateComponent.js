import React from 'react';

function DateComponent(props) {
  const { value, label } = props;

  return (
    <div className="date-component">
      <p>{label}</p>
      <div>{value || 'no date'}</div>
    </div>
  );
}

export default DateComponent;