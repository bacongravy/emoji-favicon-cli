const fetch = require('node-fetch').default;
const fs = require('fs');
const pngToIco = require('png-to-ico');

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

module.exports = github;
