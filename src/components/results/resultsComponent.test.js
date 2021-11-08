
import React from 'react';
import renderer from 'react-test-renderer';
import ResultsComponent from './resultsComponent';

test('Should load default result card component', () => {
  const component = renderer.create(
    <ResultsComponent />,
  );
  console.log(component.toJSON())
  // TODO

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});