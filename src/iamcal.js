const fetch = require('node-fetch').default;
const convertToIco = require('png-to-ico');
const {
  charForEmoji,
  unicodeFilenameForEmoji,
  getBuffer,
  getJson,
  writeTo,
} = require('./util');

const projectUrl = 'https://cdn.jsdelivr.net/gh/iamcal/emoji-data@5.0.1';

const validVendors = ['apple', 'facebook', 'google', 'twitter'];
const defaultVendor = 'google';

const checkVendor = async (vendor) => {
  if (!validVendors.includes(vendor))
    throw new Error(`Vendor '${vendor}' not found.`);
};

const fetchEmojiIndex = () => fetch(`${projectUrl}/emoji.json`).then(getJson);

const generateUrl = (emoji, vendor) => (index) => {
  const item = index.find((element) => element.short_name === emoji);
  let filename;
  if (item !== undefined) {
    filename = item.image;
  }
  if (filename === undefined && charForEmoji(emoji) !== undefined) {
    filename = unicodeFilenameForEmoji(emoji);
  }
  if (!filename) throw new Error('Emoji not found');
  return `${projectUrl}/img-${vendor}-64/${filename}`;
};

const validate = (res) => {
  if (res.status !== 200) throw new Error('Emoji not found');
  return res;
};

module.exports = (emoji, path, vendor = defaultVendor) =>
  checkVendor(vendor)
    .then(fetchEmojiIndex)
    .then(generateUrl(emoji, vendor))
    .then(fetch)
    .then(validate)
    .then(getBuffer)
    .then(convertToIco)
    .then(writeTo(path));
