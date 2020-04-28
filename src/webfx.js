const emojis = require('emoji-img');
const fs = require('fs');
const pngToIco = require('png-to-ico');

module.exports = (emoji, path) =>
  pngToIco(emojis.get(emoji)).then((buf) => fs.writeFileSync(path, buf));
