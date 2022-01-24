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

test('Test with mock #2 Error response', async () => {
  const errorMessage = 'Network Error';
  const errorParams = {
    'cause': errorMessage,
    'response': {
      'status': 404,
      'statusText': 'Page not found!',
      'headers': 'not ok!',
    },
  };
  axios.get.mockImplementationOnce(() => Promise.
      reject(new Error(errorMessage, errorParams)));

  const data = await getRemotePage('https://www.example.com/error1');
  expect(data).toBeFalsy();
});

test('Test with mock #3 Error request', async () => {
  const errorMessage = 'Network Error';
  const errorParams = {'request': 'Bad request!', 'cause': errorMessage};
  axios.get.mockImplementationOnce(() => Promise.
      reject(new Error(errorMessage, errorParams)));

  const data = await getRemotePage('https://www.example.com/error2');
  expect(data).toBeFalsy();
});

test('Test with mock #4 Error message', async () => {
  const errorMessage = 'Network Error';
  axios.get.mockImplementationOnce(() => Promise.
      reject(new Error(errorMessage)));

  const data = await getRemotePage('https://www.example.com/error3');
  expect(data).toBeFalsy();
});
