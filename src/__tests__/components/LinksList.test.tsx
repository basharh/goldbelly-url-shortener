import '@testing-library/jest-dom';
import {
  render,
  waitFor,
  screen,
  fireEvent,
  within
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Link } from '../../api';
import LinksList from '../../components/LinksList';

const links: Link[] = [
  {
    short_url: 'https://gb.com/shorty',
    slug: 'shorty',
    url: 'https://goldbelly.com'
  },
  {
    short_url: 'https://gb.com/shorty1',
    slug: 'shorty1',
    url: 'https://goldbelly1.com'
  }
];

describe('<LinksList />', () => {
  it('displays a list of links', async () => {
    render(
      <LinksList
        links={links}
        onDelete={() => {
          /* noop */
        }}
      />
    );

    links.forEach(({ short_url, slug, url }) => {
      const row = screen.getByText(short_url).closest('tr');
      const { getByText } = within(row);
      expect(getByText(short_url)).toBeInTheDocument();
      expect(getByText(slug)).toBeInTheDocument();
      expect(getByText(url)).toBeInTheDocument();
    });
  });
});
