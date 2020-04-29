const fetch = require('node-fetch').default;
const convertToIco = require('png-to-ico');
const { getBuffer, getJson, writeTo } = require('./util');

const fetchEmojiIndex = () =>
  fetch('https://api.github.com/emojis').then(getJson);

const generateUrl = (emoji) => (data) => {
  const url = data[emoji];
  if (url === undefined) throw new Error('Emoji not found');
  return url;
};

const validate = (res) => {
  if (res.status !== 200) throw new Error('Emoji not found');
  return res;
};

module.exports = (emoji, path) =>
  fetchEmojiIndex()
    .then(generateUrl(emoji))
    .then(fetch)
    .then(validate)
    .then(getBuffer)
    .then(convertToIco)
    .then(writeTo(path));
