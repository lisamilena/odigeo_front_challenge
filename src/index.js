import './scss/styles.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchComponent from './components/home/searchComponent';
import ResultsComponent from './components/results/resultsComponent';

class Root extends Component {
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const filters = {
      departure: urlParams.get('departure'),
      arrival: urlParams.get('arrival'),
      departureDate: urlParams.get('departureDate')
    };

    return (
      urlParams.get('results') !== null ?
        <ResultsComponent { ...filters } /> :
        <SearchComponent { ...filters } />
    )
  }
}

let container = document.getElementById('root');
let component = <Root />;
ReactDOM.render(component, container);