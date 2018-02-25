process.env.EH_RAVEN_DSN = 'missing';
process.env.EH_RAVEN_PROJECT = 'missing';
process.env.THE_TV_DB_API_KEY = process.argv[2];
process.env.THE_TV_DB_USER_KEY = process.argv[3];
process.env.BUCKET_NAME = process.argv[4];
process.env.BUCKET_URL = process.argv[5] || 'https://d1lolx4ilifvdr.cloudfront.net';
const key = process.argv[6] || '/poster/80379.jpg';

const handler = require('./dist/handler');

const event = {
  queryStringParameters: {
    key
  }
};

const logger = {
  log(...msgs) {
    console.log(...msgs);
  }
};

handler
  .imageFetcher(event, logger)
  .then(result => console.log(result))
  .catch(error => console.error(error));
