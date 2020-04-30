const { fetchConvertAndWriteTo } = require('../util');

const projectUrl = 'https://cdn.jsdelivr.net/gh/rumkin/emoji-img@master';

const generateUrl = async (emoji) => `${projectUrl}/emojis/${emoji}.png`;

module.exports = (emoji, path) =>
  generateUrl(emoji).then(fetchConvertAndWriteTo(path));
