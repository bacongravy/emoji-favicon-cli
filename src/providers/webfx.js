// last updated 2019-11-21
const projectUrl =
  'https://cdn.jsdelivr.net/gh/WebpageFX/emoji-cheat-sheet.com@master';

const vendors = ['webfx'];

const getUrl = async (emoji) =>
  `${projectUrl}/public/graphics/emojis/${emoji}.png`;

module.exports = { getUrl, vendors };
