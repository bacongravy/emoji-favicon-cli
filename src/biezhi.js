const fetch = require('node-fetch').default;
const fs = require('fs');
const convertToIco = require('png-to-ico');

const projectUrl = 'https://cdn.jsdelivr.net/gh/biezhi/emojis';

const validate = (res) => {
  if (res.status !== 200) throw new Error('Emoji not found');
  return res;
};

const getBuffer = (res) => res.buffer();

const writeTo = (path) => (buf) => fs.writeFileSync(path, buf);

module.exports = (emoji, path) =>
  fetch(`${projectUrl}/${emoji}.png`)
    .then(validate)
    .then(getBuffer)
    .then(convertToIco)
    .then(writeTo(path));
