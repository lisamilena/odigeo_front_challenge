
import React from 'react';
import renderer from 'react-test-renderer';
import DateComponent from './dateComponent';

test('Should load default date component', () => {
  const component = renderer.create(
    <DateComponent />,
  );

  const tree = component.toJSON();
  expect(tree.props.className).toBe('date-component');
  const child = tree.children[0];
  expect(child.type).toBe('input');
  expect(child.props.value).toBe(undefined);
});

test('Should load date component with value and label', () => {
  const testLabel = 'Test label';
  const testValue = new Date();
  const component = renderer.create(
    <DateComponent value={testValue} label={testLabel}/>,
  );

  const tree = component.toJSON();
  expect(tree.props.className).toBe('date-component');
  const fistChild = tree.children[0];
  expect(fistChild.type).toBe('label');
  expect(fistChild.children[0]).toBe(testLabel);
  const secondChild = tree.children[1];
  expect(secondChild.type).toBe('input');
  expect(secondChild.props.value).toBe(testValue);
});