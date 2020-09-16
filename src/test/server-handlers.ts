import { rest } from 'msw'; // msw supports graphql too!

const links = [
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

const handlers = [
  rest.get('http://api.bely.me/links', async (req, res, ctx) => {
    return res(ctx.json(links));
  }),
  rest.post('http://api.bely.me/links', async (req, res, ctx) => {
    return res(ctx.json(links[0]));
  })
];

export { handlers };
