import React, { useEffect } from 'react';

import { useContext } from '../../app.provider';
import ResultCardComponent from './resultCardComponent';

function ResultsComponent({ departure, arrival, departureDate, order }) {
  const { itineraries, loading, loadResults } = useContext();

  useEffect(() => {
    loadResults({ departure, arrival, departureDate, order: order || 'asc' });
  }, [loadResults]);

  return (<> {
    !loading ?
      (
        <div className="results" > {!itineraries.length && <div> no items </div>}
          {itineraries?.map(itinerary => < ResultCardComponent {...itinerary} />)} </div>
      ) :
      <div class='spinner'> </div>
  } </>);
}

export default ResultsComponent;