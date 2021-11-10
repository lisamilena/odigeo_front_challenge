import React from 'react';
import renderer from 'react-test-renderer';

import ResultsHeaderComponent from './resultsHeaderComponent';
import TestAppProvider from '../../testAppProvider';

test('Should load default result header component', () => {
  const filters = {
    departure: 'Madrid',
    arrival: 'Tokio',
    departureDate: '2021-11-17',
    order: 'asc'
  };

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => []
  }));

  const component = renderer.create(
    <TestAppProvider>
      <ResultsHeaderComponent { ...filters }/>
    </TestAppProvider>,
  );

  const tree = component.toJSON();
  expect(tree.props.className).toBe('card mb-5');
  
  const firstChild = tree.children[0];
  expect(firstChild.type).toBe('div');
  expect(firstChild.props.className).toContain('card-body row');
});