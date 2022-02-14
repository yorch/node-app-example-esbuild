import got from 'got';

const run = async () => {
  try {
    const { body } = await got.get('https://api.ipify.org', {
      headers: {
        'user-agent': 'curl/7.54.1',
      },
    });
    console.log(`Your external IP is ${body.trim()}`);
  } catch (err) {
    console.error('There was an error getting your IP address');
  }
};

run();
