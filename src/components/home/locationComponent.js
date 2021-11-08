import React from 'react';

function LocationComponent(props) {
  const { locations, value, label, onChange } = props;
  const id = `location-${(Math.random() + 1).toString(36).substring(7)}`;

  return (
    <div className="location-component">
      <label for={id}>{label}:</label>
      <select name={id} id={id} onChange={(e) => onChange(e.target.value)}>
        <option hidden>Select one</option>
        {locations.map((location, key) => <option value={location} key={key} selected={location === value}>{location}</option>)}
      </select>
    </div>
  );
}

export default LocationComponent;