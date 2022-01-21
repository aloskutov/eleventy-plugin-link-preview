'use strict';

const getRemotePage = require('../src/getRemotePage');

jest.mock('axios', () => {
  return {
    get: () => Promise.resolve({data: 'some html data'}),
  };
});

test('Test with mock #1', async () => {
  const data = await getRemotePage('https://www.example.com');
  expect(data).toBe('some html data');
});
