import { GetServerSideProps } from 'next';
import { css } from '@emotion/core';
import ShortenerForm, { ShortenerFormData } from '../components/ShortenerForm';
import LinksList from '../components/LinksList';
import { API, Link } from '../api';

interface HomeProps {
  links: Link[];
}

const Home: React.FC<HomeProps> = ({ links }) => {
  return (
    <div>
      <div
        css={css`
          padding: 32px;
          background-color: #ccc;
        `}
      >
        <ShortenerForm
          onSubmit={(data: ShortenerFormData) => {
            // noop
          }}
        />
      </div>
      <div>
        <LinksList links={links} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const api = new API();

  const links = await api.getLinks();

  return {
    props: {
      links
    }
  };
};

export default Home;
