import { Button } from '@material-ui/core';
import { css } from '@emotion/core';
import { Link } from '../api';

interface LinksListProps {
  links: Link[];
  onDelete: (link: Link) => void;
}

interface LinksListRowProps {
  link: Link;
  onDelete: (link: Link) => void;
}

const LinksList: React.FC<LinksListProps> = ({ links, onDelete }) => {
  const rows = links.map((link, index) => (
    <LinksListRow key={index} link={link} onDelete={onDelete} />
  ));

  return (
    <table
      css={css`
        width: 100%;
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
          <th>action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const LinksListRow: React.FC<LinksListRowProps> = ({ link, onDelete }) => {
  return (
    <tr>
      <td>{link.short_url}</td>
      <td>{link.slug}</td>
      <td>{link.url}</td>
      <td
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Button
          variant="contained"
          type="button"
          size="small"
          onClick={() => onDelete(link)}
        >
          delete
        </Button>
      </td>
    </tr>
  );
};

export default LinksList;
