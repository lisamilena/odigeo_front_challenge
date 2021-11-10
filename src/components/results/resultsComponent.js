import React, { useEffect, useMemo } from 'react';

import { useContext } from '../../app.provider';
import ResultCardComponent from './resultCardComponent';
import ResultsHeaderComponent from './resultsHeaderComponent';

function ResultsComponent({ departure, arrival, departureDate, order }) {
  const { itineraries, isLoading, loadResults } = useContext();

  const filters = useMemo(() => ({ departure, arrival, departureDate, order: order || 'asc' }), [order])

  useEffect(() => {
    loadResults(filters);
  }, [loadResults, filters]);

  return (<div className="results"> 
    <ResultsHeaderComponent {...filters} />
    {
      isLoading ?
        (<div class='spinner'></div>) : 
        (
          !itineraries.length ?
            <div> no items </div> :
            itineraries?.map((itinerary, key) => < ResultCardComponent key={key} {...itinerary} />)
        )
        
    }
  </div>);
}

export default ResultsComponent;