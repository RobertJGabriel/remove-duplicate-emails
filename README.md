# Remove Duplicate Emails [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  <span class="badge-patreon"><a href="https://www.patreon.com/robertjgabriel" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
> A node module that removes +1 trick at the end of emails on sign up. To stop duplicate accounts.

## Installation

```sh
$ npm install --save remove-duplicate-emails --save
```

## Usage

```js
const duplicateEmails = require('remove-duplicate-emails');

var removedDuplicate = duplicateEmails.remove('email@email.com'); // Returns ruAfMk

```
## License

MIT © [Robert James Gabriel](https://www.robertgabriel.ninja)


[npm-image]: https://badge.fury.io/js/remove-duplicate-emails.svg
[npm-url]: https://npmjs.org/package/remove-duplicate-emails
[travis-image]: https://travis-ci.org/RobertJGabriel/remove-duplicate-emails.svg?branch=master
[travis-url]: https://travis-ci.org/RobertJGabriel/remove-duplicate-emails
[daviddm-image]: https://david-dm.org/RobertJGabriel/remove-duplicate-emails.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/RobertJGabriel/remove-duplicate-emails
