const fetch = require('node-fetch').default;
const convertToIco = require('png-to-ico');
const { getBuffer, writeTo } = require('./util');

const projectUrl = 'https://cdn.jsdelivr.net/gh/biezhi/emojis';

const validate = (res) => {
  if (res.status !== 200) throw new Error('Emoji not found');
  return res;
};

module.exports = (emoji, path) =>
  fetch(`${projectUrl}/${emoji}.png`)
    .then(validate)
    .then(getBuffer)
    .then(convertToIco)
    .then(writeTo(path));
