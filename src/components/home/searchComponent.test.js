
import React from 'react';
import renderer from 'react-test-renderer';
import SearchComponent from './searchComponent';

test('Should load default search component', () => {
  const component = renderer.create(
    <SearchComponent />,
  );
  console.log(component.toJSON())
  // TODO

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});