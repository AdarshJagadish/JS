// let regex = /[cr]at/
// console.log(regex.test('cat'))

// let regex = /[a-z0-9]/
// console.log(regex.test('hello'))
// console.log(regex.test('HELLO'))
// console.log(regex.test('123'))
// console.log(regex.test('hello123'))


// let regex = /^cat/
// console.log(regex.test('cat is an animal'))         //true
// console.log(regex.test('i love my cat'))            // false


// let regex = /cat$/
// console.log(regex.test('i love my cat'))            // true
// console.log(regex.test('cat is an animal'))         // false


// let regex = /Cat$/i
// console.log(regex.test('i love my cat'))            // true
// console.log(regex.test('cat is an animal'))         // false


// ------------------------------ Multiline identifiers(m) ---------------------------//

// let regex = /cat$/m
// console.log(regex.test('i love my cat\n cat is an animal'))            // true

// ------------------------------ Multiline identifiers(m) ---------------------------//




// ------------------------------ (*) ---------------------------//


// let regex = /cat*/
// console.log(regex.test('ca'))                    // true
// console.log(regex.test('cat'))                   // true  - 0 or more t
// console.log(regex.test('catt'))                  // true

// ------------------------------ (*) ---------------------------//




// ------------------------------ (+) ---------------------------//

// let regex = /cat+/
// console.log(regex.test('ca'))                    // false
// console.log(regex.test('cat'))                   // true  - 1 or more t
// console.log(regex.test('catt'))                  // true

// ------------------------------ (+) ---------------------------//


let regex = /fish(es)?/
console.log(regex.test('fish'))
console.log(regex.test('fishes'))
console.log(regex.test('fished'))