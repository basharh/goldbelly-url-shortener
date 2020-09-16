import React from 'react';
import renderer from 'react-test-renderer';
import { API } from '../api';

// create an API that mimics the response for the api
/* It's imporant here not test the implementation of the API but the expected
 * behavior of the API with changes to the actual rest endpoint. If we were to
 * mock axios, we would probably be testing the implementation of the API
 * methods which we don't want. In the previous case, any change to the library
 * we use to call the REST endpoint would fail our tests.
 */

describe('api', () => {
  describe('getLinks', () => {
    test('should fetch a list of links', async () => {
      const api = new API();
      const links = await api.getLinks();
      expect(links).toHaveLength(2);
    });
  });

  describe('addLink', () => {
    test('should return link on success', async () => {
      const api = new API();
      const link = await api.addLink('', '');
      expect(link.slug).toBe('shorty');
    });

    test('should reject on POST /links error', () => {});
  });
});
