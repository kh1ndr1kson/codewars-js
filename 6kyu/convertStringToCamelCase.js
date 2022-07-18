/*
 Instructions:
 Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 The first word within the output should be capitalized only if the original word
 was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

 Example:
 toCamelCase('the-stealth-warrior') -> "theStealthWarrior"
 toCamelCase('The_Stealth-Warrior') -> "TheStealthWarrior"
 */

/**
 *
 * @param str - input text
 * @returns {string}
 */
const toCamelCase = (str) => (
  str.split(/\-|\_/).map((el, idx) => (
    idx === 0
      ? el
      : el.replace(el[0], el[0].toUpperCase())
  )).join('')
)
