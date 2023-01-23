'use strict';

const hasCustomLink = require('../src/hasCustomLink');

describe('hasCustomLink test', () => {
  test('Test #1. no options', () => {
    const url = 'http://www.some-url.com/';
    expect(hasCustomLink(url)).toBeFalsy();
  });
  test('Test #2. Another url', () => {
    const url = 'http://www.some-url.com/';
    const options = {
      customLink: {
        'http://www.other-url.com/': {
          title: 'Title text',
          description: 'descriptin text',
          'image': '/path/to/image.jpg',
        }
      }
    };
    expect(hasCustomLink(url, options)).toBeFalsy();
  });
  test('Test #3. Same url', () => {
    const url = 'http://www.some-url.com/';
    const options = {
      customLink: {
        'http://www.some-url.com/': {
          title: 'Title text',
          description: 'Description text',
          image: '/path/to/image.jpg',
        }
      }
    };
    const result = {
      url: 'http://www.some-url.com/',
      title: 'Title text',
      description: 'Description text',
      image: '/path/to/image.jpg',
      domain: 'www.some-url.com',
    };
    expect(hasCustomLink(url, options)).toEqual(result);
  });
  test('test #4. Long url' , () => {
    const url = 'http://www.some-url.com/path/to/page/';
    const options = {
      customLink: {
        'http://www.some-url.com/path/to/page/': {
          title: 'Title text',
          description: 'Description text',
          image: '/path/to/image.jpg',
        }
      }
    };
    const result = {
      url: url,
      title: 'Title text',
      description: 'Description text',
      image: '/path/to/image.jpg',
      domain: 'www.some-url.com',
    };
    expect(hasCustomLink(url, options)).toEqual(result);
  });
  test('test #5. URL contains only relative path' , () => {
    const url = '/path/to/page/';
    const options = {
      customLink: {
        '/path/to/page/': {
          title: 'Title text',
          description: 'Description text',
          image: '/path/to/image.jpg',
          domain: 'www.my-domain.com'
        }
      }
    };
    const result = {
      url: url,
      title: 'Title text',
      description: 'Description text',
      image: '/path/to/image.jpg',
      domain: 'www.my-domain.com',
    };
    expect(hasCustomLink(url, options)).toEqual(result);
  });
});
