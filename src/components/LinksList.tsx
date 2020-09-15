import { css } from '@emotion/core';
import { Link } from '../api';

interface LinksListProps {
  links: Link[];
}

interface LinksListRowProps {
  link: Link;
}

const LinksList: React.FC<LinksListProps> = ({ links }) => {
  const rows = links.map((link, index) => (
    <LinksListRow key={index} link={link} />
  ));

  return (
    <table
      css={css`
        td,
        th {
          border: 1px solid #999;
          padding: 0.5rem;
        }
      `}
    >
      <thead>
        <tr>
          <th>short url</th>
          <th>slug</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const LinksListRow: React.FC<LinksListRowProps> = ({ link }) => {
  return (
    <tr>
      <td>{link.short_url}</td>
      <td>{link.slug}</td>
      <td>{link.url}</td>
    </tr>
  );
};

export default LinksList;
