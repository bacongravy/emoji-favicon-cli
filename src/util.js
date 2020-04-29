const emojis = require('emojilib');
const fs = require('fs');
const fetch = require('node-fetch').default;
const { Ico, IcoImage } = require('@fiahfy/ico');

const convertToIco = (buf) => {
  const ico = new Ico();
  ico.append(IcoImage.fromPNG(buf));
  return ico.data;
};

const charForEmoji = (emoji) =>
  emojis.lib[emoji] ? emojis.lib[emoji].char : undefined;

const codepointStringForChar = (char) => {
  return Array.from(char)
    .map((v) => v.codePointAt(0).toString(16))
    .join('-');
};

const unicodeFilenameForEmoji = (emoji) =>
  `${codepointStringForChar(charForEmoji(emoji))}.png`;

const getBuffer = (res) => res.buffer();

const getJson = (res) => res.json();

const writeTo = (path) => (buf) => fs.writeFileSync(path, buf);

const validateResponse = (res) => {
  if (res.status !== 200) throw new Error('Emoji not found');
  return res;
};

const fetchJson = (url) => fetch(url).then(getJson);

const fetchConvertAndWriteTo = (path) => (url) =>
  fetch(url)
    .then(validateResponse)
    .then(getBuffer)
    .then(convertToIco)
    .then(writeTo(path));

const validateVendor = async (vendor, validVendors) => {
  if (!validVendors.includes(vendor))
    throw new Error(`Vendor '${vendor}' not found.`);
};

module.exports = {
  convertToIco,
  charForEmoji,
  unicodeFilenameForEmoji,
  writeTo,
  fetchJson,
  fetchConvertAndWriteTo,
  validateVendor,
};
