import React from 'react';

function LocationComponent(props) {
  const { locations, value, label, onChange } = props;
  const id = `location-${(Math.random() + 1).toString(36).substring(7)}`;

  return (
    <div className="location-component">
      <div>{value || 'no location'}</div>
      {/* <Select
        {...props}
        value = {
          locations.filter(option => 
              option.label === 'Some label')
        }
        onChange = {value => console.log(value)}
        onBlur={(val) => console.log(val, props.input.value)}
        options={locations}
        placeholder={placeholder}
      /> */}
      <label for={id}>{label}:</label>
      <select name={id} id={id} onChange={(v) => console.log(v)}>
        {locations.map((location, key) => <option value={location} key={key}>{location}</option>)}
      </select>
    </div>
  );
}

export default LocationComponent;