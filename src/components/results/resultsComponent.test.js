import React from 'react';
import renderer from 'react-test-renderer';

import ResultsComponent from './resultsComponent';
import TestAppProvider from '../../testAppProvider';

test('Should load default results component', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => []
  }));

  const component = renderer.create(
    <TestAppProvider>
      <ResultsComponent />
    </TestAppProvider>,
  );

  const tree = component.toJSON();
  expect(tree.type).toBe('div');
  expect(tree.props.className).toBe('results');
});