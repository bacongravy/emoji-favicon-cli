const emojis = require('emoji-img');
const fs = require('fs');
const { convertToIco, writeTo } = require('../util');

const get = async (emoji) => emojis.get(emoji);

const validate = (path) => {
  if (path === undefined) throw new Error('Emoji not found');
  return path;
};

module.exports = (emoji, path) =>
  get(emoji)
    .then(validate)
    .then(fs.readFileSync)
    .then(convertToIco)
    .then(writeTo(path));
