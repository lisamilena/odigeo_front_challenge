import React, { useEffect } from 'react';

import { useContext } from '../../app.provider';

function ResultsComponent({departure, arrival, departureDate}) {
  const { itineraries, loading, loadResults } = useContext();

  useEffect(() => {
    console.log('useEffect', loadResults)
    loadResults(departure, arrival, departureDate);
  }, [/*loadResults*/]);

  return (
    <div className="results">
      {!itineraries.length && <div>no items</div>}
      {/*itineraries?.map(itinerary => <div>{JSON.stringify(itinerary)}</div>)*/}
    </div>
  );
}

export default ResultsComponent;