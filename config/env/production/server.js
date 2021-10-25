module.exports = ({ env }) => ({
  url: env(process.env.MY_HEROKU_URL),
});
