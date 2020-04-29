const emojis = require('emojilib');
const fs = require('fs');

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

module.exports = {
  charForEmoji,
  unicodeFilenameForEmoji,
  getBuffer,
  getJson,
  writeTo,
};
