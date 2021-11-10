import React from 'react';
import renderer from 'react-test-renderer';
import ResultCardComponent from './resultCardComponent';

test('Should load default result card component', () => {
  const data = {
    arrivalDate:{
      year:2019,
      month:0,
      dayOfMonth:5,
      hourOfDay:17,
      minute:21,
      second:40
    },
    departureDate:{
      year:2019,
      month:0,
      dayOfMonth:3,
      hourOfDay:17,
      minute:21,
      second:40
    },
    arrivalLocation:"Madrid",
    departureLocation:"London",
    carrier:"Ryanair",
    price:33.43
  };
  const component = renderer.create(
    <ResultCardComponent { ...data }/>,
  );

  const tree = component.toJSON();
  expect(tree.props.className).toBe('resultCard row');
  
  const firstChild = tree.children[0];
  expect(firstChild.type).toBe('img');
  expect(firstChild.props.alt).toBe(data.carrier);
  
  const secondChild = tree.children[1];
  expect(secondChild.type).toBe('div');
  expect(secondChild.children[0].children[0]).toBe(`${data.departureDate.hourOfDay}:${data.departureDate.minute}`);
  expect(secondChild.children[1].children[0]).toBe(`${data.departureDate.dayOfMonth}/0${data.departureDate.month+1}/${data.departureDate.year}`);
  expect(secondChild.children[2].children[0]).toBe(data.departureLocation);
  
  const thirdChild = tree.children[2];
  expect(thirdChild.type).toBe('div');
  expect(thirdChild.children[0].children[0]).toBe(`${data.arrivalDate.hourOfDay}:${data.arrivalDate.minute}`);
  expect(thirdChild.children[1].children[0]).toBe(`${data.arrivalDate.dayOfMonth}/0${data.arrivalDate.month+1}/${data.arrivalDate.year}`);
  expect(thirdChild.children[2].children[0]).toBe(data.arrivalLocation);
  
  const fourthChild = tree.children[3];
  expect(fourthChild.type).toBe('div');
  expect(fourthChild.children[0].children[0]).toBe(data.price.toString());
});