const fetch = require('node-fetch').default;
const convertToIco = require('png-to-ico');
const { getBuffer, getJson, writeTo } = require('./util');

const projectUrl = 'https://cdn.jsdelivr.net/gh/iamcal/emoji-data@5.0.1';

const validVendors = ['apple', 'facebook', 'google', 'twitter'];
const defaultVendor = 'google';

const find = (emoji) => (data) =>
  data.find((item) => item.short_name === emoji);

const validate = (item) => {
  if (item === undefined) throw new Error('Emoji not found');
  return item;
};

const generateUrlFor = (vendor) => (item) => {
  if (!validVendors.includes(vendor))
    throw new Error(`Vendor '${vendor}' not found.`);
  return `${projectUrl}/img-${vendor}-64/${item.image}`;
};

module.exports = (emoji, path, vendor = defaultVendor) =>
  fetch(`${projectUrl}/emoji.json`)
    .then(getJson)
    .then(find(emoji))
    .then(validate)
    .then(generateUrlFor(vendor))
    .then(fetch)
    .then(getBuffer)
    .then(convertToIco)
    .then(writeTo(path));
