const {
  charForEmoji,
  unicodeFilenameForEmoji,
  fetchConvertAndWriteTo,
  validateVendor,
} = require('../util');

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

const generateUrl = (emoji, vendor) => () => {
  if (!charForEmoji(emoji)) throw new Error('Emoji not found');
  return `${projectUrl}/images/${vendor}/${unicodeFilenameForEmoji(emoji)}`;
};

module.exports = (emoji, path, vendor = defaultVendor) =>
  validateVendor(vendor, validVendors)
    .then(generateUrl(emoji, vendor))
    .then(fetchConvertAndWriteTo(path));
