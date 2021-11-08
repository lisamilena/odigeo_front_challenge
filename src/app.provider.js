import React, { useState, useEffect, useCallback } from 'react';

const AppContext = React.createContext()

function AppProvider({children, apiUrl}) {
  const [isLoading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [itineraries, setItineraries] = useState([]);
  
  useEffect(() => {
    fetch(`${apiUrl}/locations`)
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      setLocations(data);
    })
    .catch(() => {
      setLoading(false);
      setLocations([]);
      alert('Locations error');
    });
  }, [apiUrl])

  const loadResults = useCallback((filters) => {
    const fetchMoreResults = async (departure, arrival, departureDate) => {
      console.log({ departure, arrival, departureDate })
      fetch(`${apiUrl}/itineraries`)
      .then(response => response.json())
      .then(data => {
        setItineraries(data);
        setLoading(false);
      })
      .catch(() => {
        setItineraries([]);
        setLoading(false);
        alert('Results error');
      });
    };

    setLoading(true);
    fetchMoreResults(filters);
  }, [apiUrl]);

  return <AppContext.Provider value={{isLoading, locations, itineraries, loadResults}}>{children}</AppContext.Provider>
}

function useContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useContext must be used within a AppProvider')
  }
  return context;
}

export {AppProvider, useContext}