const { charForEmoji, unicodeFilenameForEmoji } = require('../util');

// last updated 2020-04-28
const projectUrl = 'https://cdn.jsdelivr.net/gh/bruceCzK/Emojiii@0.4.0';

const vendors = [
  'apple',
  'facebook',
  'google',
  'joy-pixels',
  'samsung',
  'twitter',
  'windows',
];

const getUrl = async (emoji, vendor) =>
  charForEmoji(emoji)
    ? `${projectUrl}/images/${vendor}/${unicodeFilenameForEmoji(emoji)}`
    : undefined;

module.exports = { getUrl, vendors };
