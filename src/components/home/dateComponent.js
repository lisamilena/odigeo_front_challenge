import React from 'react';

function DateComponent(props) {
  const { value, label, min, max, onChange } = props;
  const id = `date-${(Math.random() + 1).toString(36).substring(7)}`;

  return (
    <div className="location-component">
      <label for={id}>{label}:</label>
      <input type="date" id={id} name={id}
        value={value}
        min={min} max={max} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export default DateComponent;