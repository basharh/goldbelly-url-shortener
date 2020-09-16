import '@testing-library/jest-dom';
import ShortenerForm from '../../src/components/ShortenerForm';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<ShortenerForm />', () => {
  it('displays a form', async () => {
    const { debug } = render(
      <ShortenerForm
        onSubmit={() => {
          // noop
        }}
      />
    );
    await waitFor(() => screen.getByRole('form'));
    expect(screen.getByRole('form')).toBeVisible();
  });

  it('should not submit with valid input', async () => {
    const onSubmit = jest.fn();
    render(<ShortenerForm onSubmit={onSubmit} />);

    await waitFor(() => screen.getByRole('form'));

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
  });

  it('should submit with valid input', async () => {
    const onSubmit = jest.fn();
    render(<ShortenerForm onSubmit={onSubmit} />);

    await waitFor(() => screen.getByRole('form'));

    userEvent.type(screen.getByLabelText('Url'), 'something!');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
