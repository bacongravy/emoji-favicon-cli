const { fetchConvertAndWriteTo } = require('../util');

// last updated 2019-11-21
const projectUrl =
  'https://cdn.jsdelivr.net/gh/WebpageFX/emoji-cheat-sheet.com@master';

const generateUrl = async (emoji) =>
  `${projectUrl}/public/graphics/emojis/${emoji}.png`;

module.exports = (emoji, path) =>
  generateUrl(emoji).then(fetchConvertAndWriteTo(path));
