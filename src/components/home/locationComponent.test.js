import React from 'react';
import renderer from 'react-test-renderer';
import LocationComponent from './locationComponent';

test('Should load default location component', () => {
  const locations = ["Madrid", "Barcelona"];
  const component = renderer.create(
    <LocationComponent locations={locations}/>,
  );

  const tree = component.toJSON();
  expect(tree.props.className).toBe('location-component');
  const child = tree.children[0];
  expect(child.type).toBe('select');
  expect(child.props.value).toBe(undefined);
});

test('Should load location component with value and label', () => {
  const testLabel = 'Test label';
  const locations = ["Madrid", "Barcelona"];
  const component = renderer.create(
    <LocationComponent value={locations[0]} label={testLabel} locations={locations}/>,
  );

  const tree = component.toJSON();
  expect(tree.props.className).toBe('location-component');
  const fistChild = tree.children[0];
  expect(fistChild.type).toBe('label');
  expect(fistChild.children[0]).toBe(testLabel);
  const secondChild = tree.children[1];
  expect(secondChild.type).toBe('select');
  expect(secondChild.children[1].props.value).toBe(locations[0]);
  expect(secondChild.children[1].props.selected).toBeTruthy();
});