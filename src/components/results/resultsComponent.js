import React from 'react';

function ResultsComponent(props) {
  const { list } = props;
  
  return (
    <div className="Comment">
      <div className="Comment-text">{list || 'no items'}</div>
    </div>
  );
}

export default ResultsComponent;