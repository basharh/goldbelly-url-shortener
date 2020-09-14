import React from 'react';
import ShortenerForm from '../../src/components/ShortenerForm';
import renderer from 'react-test-renderer';

describe('<ShortenerForm />', () => {
  it('renders a shortener form', () => {
    const component = renderer.create(<ShortenerForm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
