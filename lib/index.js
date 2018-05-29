'use strict';
const regex = /\+\d+@/gim;

function remove(email) {
  if (email !== null || email !== undefined) {
    const newstr = email.replace(regex, '@');
    return newstr;
  }
  if (email === null || email === undefined) {
    return 'no string sent';
  }
}
exports.remove = remove;
