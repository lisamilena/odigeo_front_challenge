import React, { useState, useEffect } from 'react';

import { useContext } from '../../app.provider';
import LocationComponent from './locationComponent';
import DateComponent from './dateComponent';

function SearchComponent(props) {
  const [allLocations, setLocations] = useState([]);
  const [departure, setDeparture] = useState(props.departure);
  const [arrival, setArrival] = useState(props.arrival);
  const [departureDate, setDepartureDate] = useState(props.departureDate);

  const { locations, loading } = useContext();
  useEffect(() => {
    setLocations(locations);
  }, [locations]);

  const onSubmit = (event) => {
    event.preventDefault();
    window.location.assign("?results");
  };

  return (
    <form className="search-component" onSubmit={onSubmit}>
      <LocationComponent value={departure} locations={allLocations.filter(location => location !== arrival)} label={'Deparute'} onChange={(val) => setDeparture(val)} />
      <LocationComponent value={arrival} locations={allLocations.filter(location => location !== departure)} label={'Arrival'} onChange={(val) => setArrival(val)} />
      <DateComponent value={departureDate} label={'Departure date'} onChange={(val) => setDepartureDate(val)}  />
      <input type="submit" value={loading ? 'Loading ...' : 'Search'}></input>
    </form>
  );
}

export default SearchComponent;