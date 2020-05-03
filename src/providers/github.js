const { fetchJson } = require('../util');

const apiUrl = 'https://api.github.com/emojis';

const vendors = ['github'];

const getUrl = async (emoji) => fetchJson(apiUrl).then((data) => data[emoji]);

module.exports = { getUrl, vendors };
