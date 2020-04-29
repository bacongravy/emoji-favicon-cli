const biezhi = require('./biezhi');
const emojiii = require('./emojiii');
const github = require('./github');
const iamcal = require('./iamcal');
const interactive = require('./interactive');
const webfx = require('./webfx');

const providers = { biezhi, emojiii, github, iamcal, webfx };
module.exports = { interactive, providers };
