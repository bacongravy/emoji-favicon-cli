// @ts-nocheck
const { AutoComplete, Select, Prompt } = require('enquirer');

class UnstyledAutoComplete extends AutoComplete {
  // eslint-disable-next-line no-useless-constructor
  constructor(options) {
    super(options);
  }

  async render() {
    // the AutoComplete render function doesn't work with suggest functions:
    // https://github.com/enquirer/enquirer/issues/236
    return Select.prototype.render.call(this);
  }

  async run() {
    return AutoComplete.prototype.run.call(this);
  }

  // the AutoComplete height is one line too large
  get height() {
    return (
      Object.getOwnPropertyDescriptor(Prompt.prototype, 'height').get.apply(
        this,
      ) - 1
    );
  }
}

module.exports = { UnstyledAutoComplete };
