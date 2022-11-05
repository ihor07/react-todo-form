function palindrom(word) {
  word.toLowerCase()
  return word === word.split('').reverse().join('')
}
console.log(palindrom('aba'))
