const fetch = require('node-fetch').default;
const fs = require('fs');
const convertToIco = require('png-to-ico');

const getJson = (res) => res.json();

const find = (emoji) => (data) => data[emoji];

const validate = (url) => {
  if (url === undefined) throw new Error('Emoji not found');
  return url;
};

const getBuffer = (res) => res.buffer();

const writeTo = (path) => (buf) => fs.writeFileSync(path, buf);

module.exports = (emoji, path) =>
  fetch('https://api.github.com/emojis')
    .then(getJson)
    .then(find(emoji))
    .then(validate)
    .then(fetch)
    .then(getBuffer)
    .then(convertToIco)
    .then(writeTo(path));
