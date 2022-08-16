/*
 * Instructions:
 * Write an algorithm that takes an array and moves all of the zeros to the end,
 * preserving the order of the other elements.
 *
 * Examples:
 * [false,1,0,1,2,0,1,3,"a"] -> [false,1,1,2,1,3,"a",0,0]
 */

/**
 *
 * @param arr - array any symbols/types
 * @returns {array}
 */
function moveZeros(arr) {
  const anyChars = []
  const onlyZeros = []

  arr.forEach((el) => {
    el === 0 ? onlyZeros.push(el) : anyChars.push(el)
  })

  return [...anyChars, ...onlyZeros]
}
