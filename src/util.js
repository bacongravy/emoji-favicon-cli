const emojis = require('emojilib');
const fetch = require('node-fetch').default;
const { Ico, IcoImage } = require('@fiahfy/ico');

class EmojiError extends Error {
  constructor(message) {
    super(message);
    this.name = 'EmojiError';
  }
}

const convertToIco = (buf) => {
  const ico = new Ico();
  Ico.supportedIconSizes.push(72);
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

const validateUrl = async (url) => {
  if (url === undefined) throw new EmojiError('Emoji not found');
  return url;
};

const validateResponse = (res) => {
  if (res.status !== 200) throw new EmojiError('Emoji not found');
  return res;
};

const fetchJson = (url) => fetch(url).then(getJson);

const fetchAndConvert = async (url) =>
  validateUrl(url)
    .then(fetch)
    .then(validateResponse)
    .then(getBuffer)
    .then(convertToIco);

module.exports = {
  EmojiError,
  charForEmoji,
  unicodeFilenameForEmoji,
  fetchJson,
  fetchAndConvert,
};
