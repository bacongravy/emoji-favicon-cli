const emojis = require('emojilib');
const fetch = require('node-fetch').default;
const fs = require('fs');
const convertToIco = require('png-to-ico');

const projectUrl = 'https://cdn.jsdelivr.net/gh/bruceCzK/Emojiii@master';

const validVendors = [
  'apple',
  'facebook',
  'google',
  'joy-pixels',
  'samsung',
  'twitter',
  'windows',
];

const defaultVendor = 'google';

const codepoints = (char) => {
  return Array.from(char)
    .map((v) => v.codePointAt(0).toString(16))
    .join('-');
};

const urlFor = (emoji, vendor) => {
  if (!emojis.lib[emoji]) throw new Error('Emoji not found');
  if (!validVendors.includes(vendor))
    throw new Error(`Vendor '${vendor}' not found.`);
  return `${projectUrl}/images/${vendor}/${codepoints(
    emojis.lib[emoji].char,
  )}.png`;
};

const validate = (res) => {
  if (res.status !== 200) throw new Error('Emoji not found');
  return res;
};

const getBuffer = (res) => res.buffer();

const writeTo = (path) => (buf) => fs.writeFileSync(path, buf);

module.exports = (emoji, path, vendor = defaultVendor) =>
  fetch(urlFor(emoji, vendor))
    .then(validate)
    .then(getBuffer)
    .then(convertToIco)
    .then(writeTo(path));
