const fs = require('fs');

const codepoints = (char) => {
  return Array.from(char)
    .map((v) => v.codePointAt(0).toString(16))
    .join('-');
};

const getBuffer = (res) => res.buffer();

const getJson = (res) => res.json();

const writeTo = (path) => (buf) => fs.writeFileSync(path, buf);

module.exports = { codepoints, getBuffer, getJson, writeTo };
