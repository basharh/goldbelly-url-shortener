import '@testing-library/jest-dom';
import ShortenerForm from '../../src/components/ShortenerForm';
import renderer from 'react-test-renderer';
import { render, waitFor, screen } from '@testing-library/react';

describe('<ShortenerForm />', () => {
  it.skip('renders a shortener form', () => {
    const component = renderer.create(<ShortenerForm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays a form', async () => {
    render(<ShortenerForm />);

    await waitFor(() => screen.getByRole('form'));

    expect(screen.getByRole('form')).toBeVisible();
  });
});
