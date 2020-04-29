const fetch = require('node-fetch').default;
const convertToIco = require('png-to-ico');
const { getBuffer, getJson, writeTo } = require('./util');

const find = (emoji) => (data) => data[emoji];

const validate = (url) => {
  if (url === undefined) throw new Error('Emoji not found');
  return url;
};

module.exports = (emoji, path) =>
  fetch('https://api.github.com/emojis')
    .then(getJson)
    .then(find(emoji))
    .then(validate)
    .then(fetch)
    .then(getBuffer)
    .then(convertToIco)
    .then(writeTo(path));
