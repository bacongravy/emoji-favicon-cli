const {
  charForEmoji,
  unicodeFilenameForEmoji,
  fetchConvertAndWriteTo,
  validateVendor,
} = require('../util');

// last updated 2020-04-28
const projectUrl = 'https://cdn.jsdelivr.net/gh/bruceCzK/Emojiii@0.4.0';

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

const generateUrl = (emoji, vendor) => () => {
  if (!charForEmoji(emoji)) throw new Error('Emoji not found');
  return `${projectUrl}/images/${vendor}/${unicodeFilenameForEmoji(emoji)}`;
};

module.exports = (emoji, path, vendor = defaultVendor) =>
  validateVendor(vendor, validVendors)
    .then(generateUrl(emoji, vendor))
    .then(fetchConvertAndWriteTo(path));
