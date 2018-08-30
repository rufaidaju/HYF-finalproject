/* jshint esversion: 6 */
var gettextParser = require('gettext-parser');

// this is a minimal example of how to do translation.
module.exports = function translate (tag) {
    var input = require('fs').readFileSync('./translations/da-DK.po');
    var po = gettextParser.po.parse(input, "UTF-8");
    var translation = po.translations[''][tag.toLowerCase()];
    if (translation) {
        return translation.msgstr[0];
    } else {
        return tag;
    }
}

/* example usage from another file:

  var translate = require('./translate.js');
  console.log(translate('Butter'));
*/
