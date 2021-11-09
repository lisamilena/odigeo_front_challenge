import React, { useState, useEffect, useCallback } from 'react';

const AppContext = React.createContext()

const filterItineraries = (data, departure, arrival, departureDate, order) => {
  const checkDate = (filterDate, date) => {
    const dateToFilter = new Date(filterDate);
    return date.year === dateToFilter.getFullYear() &&
      date.month === dateToFilter.getMonth() &&
      date.dayOfMonth === dateToFilter.getDate();
  };

  return data
    .filter(itinerary =>
      (!departure || departure === itinerary.departureLocation) &&
      (!arrival || arrival === itinerary.arrivalLocation) &&
      (!departureDate || checkDate(departureDate, itinerary.departureDate))
    )
    .sort((a, b) => order !== 'asc' ? (b.price - a.price) : (a.price - b.price));
};

function AppProvider({ children, apiUrl }) {
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
    const fetchMoreResults = async ({ departure, arrival, departureDate, order }) => {
      fetch(`${apiUrl}/itineraries`)
        .then(response => response.json())
        .then(data => {
          setItineraries(filterItineraries(data, departure, arrival, departureDate, order));
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

  return <AppContext.Provider value={{ isLoading, locations, itineraries, loadResults }}>{children}</AppContext.Provider>
}

function useContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useContext must be used within a AppProvider')
  }
  return context;
}

export { AppProvider, useContext }