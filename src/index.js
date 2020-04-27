const fs = require('fs');
const emojis = require('emoji-img');
const pngToIco = require('png-to-ico');
const fetch = require('node-fetch').default;

const webfx = (emoji, destination = '.') => {
  const png = emojis.get(emoji);
  pngToIco(png)
    .then((buf) => fs.writeFileSync(`${destination}/favicon.ico`, buf))
    .catch(console.error);
};

const github = (emoji, destination = '.') => {
  fetch('https://api.github.com/emojis')
    .then((res) => res.json())
    .then((data) => data[emoji])
    .then((url) => fetch(url))
    .then((res) => res.buffer())
    .then((buf) => pngToIco(buf))
    .then((buf) => fs.writeFileSync(`${destination}/favicon.ico`, buf))
    .catch(console.error);
};

module.exports = { webfx, github };
