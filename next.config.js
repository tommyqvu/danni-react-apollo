if (process.env.NODE_ENV !== 'production') {
  const dotEnvResult = require('dotenv').config();
  if (dotEnvResult.error) {
    throw dotEnvResult.error;
  }
}

module.exports = {
  env: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  },
};
