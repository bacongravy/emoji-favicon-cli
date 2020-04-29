const {
  charForEmoji,
  unicodeFilenameForEmoji,
  fetchJson,
  fetchConvertAndWriteTo,
  validateVendor,
} = require('./util');

const projectUrl = 'https://cdn.jsdelivr.net/gh/iamcal/emoji-data@5.0.1';

const validVendors = ['apple', 'facebook', 'google', 'twitter'];
const defaultVendor = 'google';

const fetchEmojiIndex = () => fetchJson(`${projectUrl}/emoji.json`);

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

module.exports = (emoji, path, vendor = defaultVendor) =>
  validateVendor(vendor, validVendors)
    .then(fetchEmojiIndex)
    .then(generateUrl(emoji, vendor))
    .then(fetchConvertAndWriteTo(path));
