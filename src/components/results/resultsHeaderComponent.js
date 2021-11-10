import React from 'react';

import { useContext } from '../../app.provider';

function ResultsHeaderComponent({ departure, arrival, departureDate, order }) {
  const { reorderResults } = useContext();

  const ORDERS = {
    asc: 'ascending',
    desc: 'descending'
  };

  return (<div className="card mb-5">
  <div className="card-body row texts text-center">
    <div className="col col-6 col-sm-3 p-2">
      <span className="mr-2">Departure:</span> {departure || "-"}
    </div>

    <div className="col col-6 col-sm-3 p-2">
      <span className="mr-2">Arrival:</span> {arrival || "-"}
    </div>
      
    <div className="col col-6 col-sm-3 p-2">
      <span className="mr-2">Departure date:</span> {departureDate || "-"}
    </div>
    
    <div className="col col-6 col-sm-3 py-1 px-2">
      <span className="mr-2">Order:</span>
      <select class="form-select form-select-sm" onChange={(e) => reorderResults({departure, arrival, departureDate, order: e.target.value})}>
        {Object.entries(ORDERS)
          .map(item => <option selected={item[0]===order} value={item[0]}>{item[1]}</option>)}
      </select>
    </div>
  </div>
  </div>);
}

export default ResultsHeaderComponent;