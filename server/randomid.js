// randomid.js

//
// This function mimics the Meteor Random.id() function, returning a 17 character random string, which should not collide with an existing key
//
export const randomId = () => {
  const UNMISTAKABLE_CHARS = '23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz'
  const digits = []
  for (let i = 0; i < 17; i++) {
    const ix = getRandomInt(UNMISTAKABLE_CHARS.length)
    digits[i] = UNMISTAKABLE_CHARS[ix]
  }
  return digits.join('')
}
