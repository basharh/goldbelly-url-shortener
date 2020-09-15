import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
};

const proxy = createProxyMiddleware({
  target: 'http://api.bely.me/',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
  headers: { 'GB-Access-Token': process.env.GB_ACCESS_TOKEN },
  ws: true // proxy websockets
});

export default proxy;
