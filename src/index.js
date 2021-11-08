import './scss/styles.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { AppProvider } from './app.provider';
import SearchComponent from './components/home/searchComponent';
import ResultsComponent from './components/results/resultsComponent';

const URL_BASE = 'http://localhost:3000';

class Root extends Component {
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const filters = {
      departure: urlParams.get('departure'),
      arrival: urlParams.get('arrival'),
      departureDate: urlParams.get('departureDate')
    };

    return (<AppProvider apiUrl={URL_BASE}>{
      urlParams.get('results') !== null ?
        <ResultsComponent { ...filters } /> :
        <SearchComponent { ...filters } />
    }</AppProvider>)
  }
}

let container = document.getElementById('root');
let component = <Root />;
ReactDOM.render(component, container);