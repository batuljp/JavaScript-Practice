/* Scope of let and const */
let a
a = 5
const b = 5
const add1 = (a, b) => {
  a = 10
  console.log(a + b) //Output: 15
}
console.log(a + b) //Output: 10
add1(a, b)

let c = 10
const d = 2
console.log('1: ', c, d) //Output: 1:  10 2
{
  let c = 15
  const d = 4
  console.log('2: ', c, d) //Output: 2:  15 4
}
console.log('3: ', c, d) //Output: 3:  10 2


/* Functions: Named, Anon, Arrow */
const add2 = function (e, f) {
  return e + f
}
console.log(add2(10, 5)) //Output: 15

function sum(g, h) {
  return g + h
}
console.log(sum(5, 5)) //Output: 10

const add3 = (i, j) => i + j
console.log(add3(5, 5)) //Output: 10


/* Spread Operator */
const fruits = ['Apple', 'Banana', 'Cherry']
const veg = ['Onion', 'Potato', 'Carrot']
console.log([...fruits, ...veg]) //Output: [ 'Apple', 'Banana', 'Cherry', 'Onion', 'Potato', 'Carrot' ]

const numbers = [5, 10, 15, 20, 25, 30];
const add = (k, l) => k + l
console.log(add(Math.max(...numbers), Math.min(...numbers))) //Output: 35


/* for...of loop */
const fruits2 = ['Apple', 'Banana', 'Cherry', 'Onion', 'Potato', 'Carrot']
for (const f of fruits2) {
  console.log(f) //Output: Prints each Fruit in Fruits
}
