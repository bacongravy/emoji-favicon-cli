const github = require('./github');
const interactive = require('./interactive');
const webfx = require('./webfx');

const providers = { github, webfx };
module.exports = { interactive, providers };
