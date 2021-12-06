/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 27]

// let john = ages[0]

let [john, mary, joe] = ages;

console.log(john)

// Destructuring objects

let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant'
};

let {
    mike,
    jill,
    alicia
} = jobs

console.log(mike, jill, alicia)

// Destructuring subsets

let lang = ['english',
    'french',
    'spanish', 'german', 'japanese'
]

let [johnNative, johnSec] = lang

let [, , maryNative, marySec] = lang

console.log(johnNative, johnSec)
console.log(maryNative, marySec)

// Using rest parameter syntax

let fruit = ['apple', 'orange', 'banana', 'peach', 'cherry']
let [fav, secFav, ...others] = fruit

console.log(fav)
console.log(secFav)
console.log(others)


let favFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "veg",
    andrea: "steak"
}
let {
    brian,
    anna,
    ...
    more
} = favFoods

console.log(brian)
console.log(anna)
console.log(more)