import Router from 'next/router';
import { GetServerSideProps } from 'next';
import { css } from '@emotion/core';
import ShortenerForm, { ShortenerFormData } from '../components/ShortenerForm';
import LinksList from '../components/LinksList';
import { API, Link } from '../api';

interface HomeProps {
  links: Link[];
}

const Home: React.FC<HomeProps> = ({ links }) => {
  const api = new API();

  return (
    <div
      css={css`
        padding: 40px 40px;
        width: 100vw;
        height: 100vh;
        background-color: #ddd;
      `}
    >
      <div
        css={css`
          width: 75%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <ShortenerForm
          onSubmit={async ({ url, slug }: ShortenerFormData) => {
            slug = slug.length == 0 ? undefined : slug;
            await api.addLink(url, slug);
            Router.replace('/'); // refresh page
          }}
        />
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
