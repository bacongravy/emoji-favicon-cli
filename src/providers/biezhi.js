const { fetchConvertAndWriteTo } = require('../util');

// last updated 2016-04-20
const projectUrl = 'https://cdn.jsdelivr.net/gh/biezhi/emojis@master';

const generateUrl = async (emoji) => `${projectUrl}/${emoji}.png`;

module.exports = (emoji, path) =>
  generateUrl(emoji).then(fetchConvertAndWriteTo(path));
