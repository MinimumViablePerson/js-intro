let iAmGood = false
let myAge = 34
let myName = `Nicolas`
let firstLineOfMyAddress = '123 Main St' // ✅
let x = '123 Main st' // ❌ no idea what x means

/*
use console log to check the current value of variables
if you are not sure
using console.log("message", variableName) is better
because logging just a variable value will get confusing
*/
// console.log('My age right now is:', myAge)
// console.log('My name is:', myName)

let nothing1 = null
let nothing2 = undefined

let message = `I am ${myName} and I am ${myAge}`
console.log(message + '!!!')

console.log('')

console.log('How are you feeling?')
if (iAmGood) {
  console.log("I'm feeling good today!")
} else {
  console.log('Not so good...')
}

console.log('')

console.log('How old are you?')
if (myAge > 18) {
  console.log('I am old enough to vote!')
}
