const emojis = require('emoji-img');
const fs = require('fs');
const pngToIco = require('png-to-ico');

const webfx = (emoji, path) =>
  pngToIco(emojis.get(emoji)).then((buf) => fs.writeFileSync(path, buf));

module.exports = webfx;
