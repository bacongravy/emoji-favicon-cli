const { fetchJson, fetchConvertAndWriteTo } = require('../util');

const fetchEmojiIndex = async () => fetchJson('https://api.github.com/emojis');

const generateUrl = (emoji) => (data) => {
  const url = data[emoji];
  if (url === undefined) throw new Error('Emoji not found');
  return url;
};

module.exports = (emoji, path) =>
  fetchEmojiIndex().then(generateUrl(emoji)).then(fetchConvertAndWriteTo(path));
