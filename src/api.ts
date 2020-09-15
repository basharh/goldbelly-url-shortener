import axios from 'axios';

// http://api.bely.me/docs/1.0/links/index.html
export interface Link {
  short_url: string;
  slug: string;
  url: string;
}

const API_URL = 'http://api.bely.me/';

export function getLinks(): Link[] {
  return [];
}
