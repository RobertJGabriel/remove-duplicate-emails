/* eslint no-undef: 0 */
/* eslint-env node */
/* eslint no-mixed-spaces-and-tabs: 0 */
const removeDuplicateEmails = require('..');

describe('Removing Tests', () => {
  it('Remove +[0-9]', () => {
    return expect(removeDuplicateEmails.remove('robertgabriel+2@gmail.com')).toEqual(
      'robertgabriel@gmail.com'
    );
  });
});
