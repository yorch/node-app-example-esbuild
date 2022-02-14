import got from 'got';

export const getAsCurl = (url: string) =>
  got(url, {
    headers: {
      'user-agent': 'curl/7.54.1',
    },
  });
