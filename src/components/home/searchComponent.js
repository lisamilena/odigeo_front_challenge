import React, {useEffect} from 'react';
import LocationComponent from './locationComponent';
import DateComponent from './dateComponent';

function SearchComponent(props) {
  const { departure, arrival, departureDate } = props;
  const locations = ['a', 'b', 'c'];
  
  useEffect(() => {
    console.log(props)
  }, []);

  return (
    <div className="Comment">
      <LocationComponent value={departure} locations={locations} label={'Deparute'}/>
      <LocationComponent value={arrival} locations={locations} label={'Arrival'}/>
      <DateComponent value={departureDate} label={'DepartureDate'} />
    </div>
  );
}

export default SearchComponent;