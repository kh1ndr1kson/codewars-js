/*
 Instructions:
 Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether
 the two arrays have the "same" elements, with the same multiplicities
 (the multiplicity of a member is the number of times it appears).
 "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

 Examples:
 array1 = [121, 144, 19, 161, 19, 144, 19, 11]
 array2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 */

/**
 *
 * @param array1
 * @param array2
 * @returns {boolean}
 */
const comp = (array1, array2) => (
  array1 && array2 && array1.length === array2.length ? (
    array1.filter((el) => (
      array2.includes(el * el) && (
        array1.reduce((t, e) => e === el ? t+1 : t, 0) === array2.reduce((t, e) => Math.sqrt(e) === el ? t+1 : t, 0)
      )
    )).length === array1.length
  ) : false
)
