const emojis = require('emojilib');
const inquirer = require('inquirer');

inquirer.registerPrompt(
  'autocomplete',
  require('inquirer-autocomplete-prompt'),
);

const renderChoice = (emoji) => `${emojis.lib[emoji].char} ${emoji}`;
const parseChoice = (choice) => choice.split(' ')[1];

const keywordsForEmoji = (emoji) => [emoji, ...emojis.lib[emoji].keywords];

const allTermsMatchKeywords = (terms, keywords) =>
  terms
    .map((term) => keywords.findIndex((value) => value.includes(term)) !== -1)
    .includes(false) === false;

const filterEmojis = (input) =>
  input
    ? emojis.ordered.filter((emoji) =>
        allTermsMatchKeywords(input.split(' '), keywordsForEmoji(emoji)),
      )
    : emojis.ordered;

const searchEmoji = async (answers, input) =>
  filterEmojis(input).map(renderChoice);

const interactive = async () =>
  inquirer
    .prompt([
      {
        type: 'autocomplete',
        name: 'emoji',
        message: 'Which emoji do you want to use?',
        source: searchEmoji,
      },
    ])
    .then((answers) => answers.emoji)
    .then(parseChoice);

module.exports = interactive;
