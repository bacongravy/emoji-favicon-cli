const interactive = require('./interactive');
const providers = require('./providers');
const { fetchAndConvert } = require('./util');

const providersByVendor = {};

Object.keys(providers).forEach((provider) =>
  providers[provider].vendors.forEach(
    // eslint-disable-next-line no-return-assign
    (vendor) => (providersByVendor[vendor] = providers[provider]),
  ),
);

const vendors = Object.keys(providersByVendor);

const getUrl = async (emoji, vendor) =>
  providersByVendor[vendor]
    ? providersByVendor[vendor].getUrl(emoji, vendor)
    : undefined;

const getFavicon = async (emoji, vendor) =>
  getUrl(emoji, vendor).then(fetchAndConvert);

module.exports = { interactive, getFavicon, vendors };
