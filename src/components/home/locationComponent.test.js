
import React from 'react';
import renderer from 'react-test-renderer';
import LocationComponent from './locationComponent';

test('Should load default location component', () => {
  const component = renderer.create(
    <LocationComponent />,
  );
  console.log(component.toJSON())
  // TODO

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});