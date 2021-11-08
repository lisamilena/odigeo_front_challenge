
import React from 'react';
import renderer from 'react-test-renderer';
import DateComponent from './dateComponent';

test('Should load default date component', () => {
  const component = renderer.create(
    <DateComponent />,
  );
  console.log(component.toJSON())
  // TODO

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});