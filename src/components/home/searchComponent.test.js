import React from 'react';
import renderer from 'react-test-renderer';

import SearchComponent from './searchComponent';
import TestAppProvider from '../../testAppProvider';

test('Should load default search component', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => []
  }));

  const component = renderer.create(
    <TestAppProvider>
      <SearchComponent />
    </TestAppProvider>,
  );

  const tree = component.toJSON();
  expect(tree.type).toBe('form');
  expect(tree.props.className).toBe('search-component');
});