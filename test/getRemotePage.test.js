'use strict';
const axios = require('axios');
const getRemotePage = require('../src/getRemotePage');

jest.mock('axios');

beforeEach(()=>{
  jest.clearAllMocks();
});

test('Test with mock #1', async () => {
  const res = {data: 'some html data'};
  axios.get.mockImplementationOnce(() => Promise.resolve(res));

  const data = await getRemotePage('https://www.example.com/');
  expect(data).toBe('some html data');
});

test('Test with mock #2 Error message', async () => {
  const networkError = new Error('Some network error');
  axios.get.mockRejectedValueOnce(networkError);

  let error = '';

  try {
    await getRemotePage('https://www.example.com/error1');
  } catch (err) {
    error = err;
  }

  expect(error).toEqual(networkError);
});
