const fetch = require('node-fetch').default;
const fs = require('fs');
const pngToIco = require('png-to-ico');

const projectUrl = 'https://cdn.jsdelivr.net/gh/iamcal/emoji-data@5.0.1';

const validVendors = ['apple', 'facebook', 'google', 'twitter'];

const validateVendor = (vendor) => {
  if (validVendors.includes(vendor)) {
    return vendor;
  }
  throw Error(`Invalid vendor '${vendor}'.`);
};

module.exports = (emoji, path, vendor = 'google') =>
  fetch(`${projectUrl}/emoji.json`)
    .then((res) => res.json())
    .then((data) => data.find((item) => item.short_name === emoji))
    .then(
      (item) => `${projectUrl}/img-${validateVendor(vendor)}-64/${item.image}`,
    )
    .then((url) => fetch(url))
    .then((res) => res.buffer())
    .then((buf) => pngToIco(buf))
    .then((buf) => fs.writeFileSync(path, buf));
