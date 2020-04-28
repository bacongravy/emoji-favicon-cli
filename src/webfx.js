const emojis = require('emoji-img');
const fs = require('fs');
const pngToIco = require('png-to-ico');

const webfx = (emoji, destination = '.') => {
  const png = emojis.get(emoji);
  pngToIco(png)
    .then((buf) => fs.writeFileSync(`${destination}/favicon.ico`, buf))
    .catch(console.error);
};

module.exports = webfx;
