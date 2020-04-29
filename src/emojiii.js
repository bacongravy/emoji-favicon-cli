const fetch = require('node-fetch').default;
const convertToIco = require('png-to-ico');
const {
  charForEmoji,
  unicodeFilenameForEmoji,
  getBuffer,
  writeTo,
} = require('./util');

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

const urlFor = (emoji, vendor) => {
  if (!charForEmoji(emoji)) throw new Error('Emoji not found');
  if (!validVendors.includes(vendor))
    throw new Error(`Vendor '${vendor}' not found.`);
  return `${projectUrl}/images/${vendor}/${unicodeFilenameForEmoji(emoji)}`;
};

const validate = (res) => {
  if (res.status !== 200) throw new Error('Emoji not found');
  return res;
};

module.exports = (emoji, path, vendor = defaultVendor) =>
  fetch(urlFor(emoji, vendor))
    .then(validate)
    .then(getBuffer)
    .then(convertToIco)
    .then(writeTo(path));
