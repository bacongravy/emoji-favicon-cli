const emojis = require('emoji-img');
const fs = require('fs');
const convertToIco = require('png-to-ico');

const get = async (emoji) => emojis.get(emoji);

const validate = (path) => {
  if (path === undefined) throw new Error('Emoji not found');
  return path;
};

const writeTo = (path) => (buf) => fs.writeFileSync(path, buf);

module.exports = (emoji, path) =>
  get(emoji).then(validate).then(convertToIco).then(writeTo(path));
