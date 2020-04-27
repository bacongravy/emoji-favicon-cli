const fs = require('fs');
const emojis = require('emoji-img');
const pngToIco = require('png-to-ico');

const run = (emoji, destination = '.') => {
  const png = emojis.get(emoji);
  pngToIco(png)
    .then((buf) => fs.writeFileSync(`${destination}/favicon.ico`, buf))
    .catch(console.error);
};

module.exports = { run };
