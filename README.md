# Front challenge

## Author
 _Lisa Milena Fernández Ayala_
 
## Run project
Compile:
```sh
$ npm install
```
Build:
```sh
$ npm run build
```
Run:
```sh
$ npm run start
```
Test (with Jest):
```sh
$ npm run test
```

## The exercise
Make a single page application with views:
- Home
- Results

### Home
It loads the filtering parameters of the url, has a form to select the filters on which to perform the search, and reloads the page with the selected filters with which the search will be carried out.

Contains a search form with the following fields:
- Departure location
- Arrival location
- Departure date
- Search button

Components that compose it:
- **SearchComponent**: Component that uses *LocationComponent* and *DateComponent* to select the locations of departure and arrival and the departure date, in case of having the search parameters in the url these will be loaded in the form.
- **LocationComponent**: Form select with its optional label, with which to select a location given a list.
- **DateComponent**: Form input with its optional label, with which to load or select a date.

### Results
Given the filter parameters of the url, it shows the filtered and ordered results. It also shows the selected filters and allows you to change the order by price to ascending or descending.

For each result it will be shown:
- Price
- Departure location
- Arrival location
- Departure date
- Arrival date
- Airline/carrier (image)

Components that compose it:
- **ResultsComponent**: Component that uses *ResultCardComponent* to display the information of each itinerary received from the request and the *ResultsHeaderComponent* to view the filters and sorting applied. It has a spinner that will be displayed during the waiting time of the requests.
- **ResultCardComponent**: It shows the information of the itinerary, formatting the times and dates and showing the image of the airline.
- **ResultsHeaderComponent**: Shows the filters applied in the search and allows you to select the order in which to display the itineraries.

### App provider
Loads the transactional information that is saved in the context of the application and makes requests to the service.

Values saved in context:
- **isLoading**: Boolean that indicates if information is being loaded.
- **locations**: List of locations retrieved from the service.
- **itineraries**: List of itineraries retrieved from the service
- **loadResults**: Function with which to retrieve and save in the context the list of itineraries given the filters and ordering.
- **reorderResults**: Function with which to reorder the recovered itineraries.


## API
Services used by the application
| Endpoint | Url |
| ------ | ------ |
| Locations | http://localhost:3000/locations |
| Itineraries | http://localhost:3000/itineraries |
