const github = require('./github');
const iamcal = require('./iamcal');
const interactive = require('./interactive');
const webfx = require('./webfx');

const providers = { github, iamcal, webfx };
module.exports = { interactive, providers };
