b() // Called b
console.log(a) // undefined

var a = 'Hello World'

function b() {
    console.log('Called b')
}

// --- Actual ----
/* function b() { // move to top -> hoisting
    console.log('Called b')
}
var a // move declaration to top and placeholder is 'undefined' -> hoisting

b()
console.log(a) // undefined
a = 'Hello World'
 */