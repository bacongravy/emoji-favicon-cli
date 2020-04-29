const { fetchConvertAndWriteTo } = require('./util');

const projectUrl = 'https://cdn.jsdelivr.net/gh/biezhi/emojis';

const generateUrl = async (emoji) => `${projectUrl}/${emoji}.png`;

module.exports = (emoji, path) =>
  generateUrl(emoji).then(fetchConvertAndWriteTo(path));
