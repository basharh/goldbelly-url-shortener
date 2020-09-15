import axios, { AxiosInstance } from 'axios';

// http://api.bely.me/docs/1.0/links/index.html
export interface Link {
  short_url: string;
  slug: string;
  url: string;
}

export class API {
  client: AxiosInstance;

  constructor() {
    const baseURL = process.browser ? '/api' : 'http://api.bely.me/';
    this.client = axios.create({
      baseURL,
      headers: { 'GB-Access-Token': process.env.GB_ACCESS_TOKEN }
    });
  }

  async getLinks(): Promise<Link[]> {
    const { data } = await this.client.get('/links');
    console.log('data:', data);
    return data;
  }

  async addLink(url: string, slug: string): Promise<Link[]> {
    const { data } = await this.client.post('/links', {
      url,
      slug
    });

    return data;
  }

  async removeLink(slug: string): Promise<Link[]> {
    const { data } = await this.client.delete(`/links/${slug}`);
    return data;
  }
}
