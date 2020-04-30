const emojis = require('emojilib');
const { UnstyledAutoComplete } = require('./unstyled-auto-complete');

const choiceForEmoji = (emoji) => ({
  message: `${emojis.lib[emoji].char} ${emoji}`,
  value: emoji,
});

const keywordsForEmoji = (emoji) => [emoji, ...emojis.lib[emoji].keywords];

const allTermsMatchKeywords = (terms, keywords) =>
  terms
    .map((term) => keywords.findIndex((value) => value.includes(term)) !== -1)
    .includes(false) === false;

const filterEmojiChoices = (input, choices) =>
  choices.filter((choice) =>
    allTermsMatchKeywords(input.split(' '), keywordsForEmoji(choice.value)),
  );

const getEmojiChoices = () => emojis.ordered.map(choiceForEmoji);

const prompt = new UnstyledAutoComplete({
  name: 'emoji',
  message: 'Which emoji do you want to use?',
  choices: getEmojiChoices,
  suggest: filterEmojiChoices,
});

module.exports = async () => prompt.run();
