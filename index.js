'use strict';

const workshopper = require('workshopper-adventure');
const path = require('path');

const HowToMarkdown = workshopper({
  appDir: __dirname,
  languages: ['en', 'zh-cn', 'uk'],
  header: require('workshopper-adventure/default/header'),
  footer: [{
    file: path.join(__dirname, 'i18n', 'footer', '{lang}.md'),
  }],
});

//Add exercises to workshopper module
HowToMarkdown.addAll([
  'HELLO WORLD',
  'HEADINGS',
  'EMPHASIS',
  'LISTS',
  'LINKS',
  'IMAGES',
  'BLOCKQUOTES',
  'CODE',
  'TABLES',
  'HORIZONTAL RULES',
  'HTML',
  'GFM',
]);

module.exports = HowToMarkdown;
