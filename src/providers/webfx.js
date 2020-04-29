const emojis = require('emoji-img');
const convertToIco = require('png-to-ico');
const { writeTo } = require('../util');

const get = async (emoji) => emojis.get(emoji);

const validate = (path) => {
  if (path === undefined) throw new Error('Emoji not found');
  return path;
};

module.exports = (emoji, path) =>
  get(emoji).then(validate).then(convertToIco).then(writeTo(path));
