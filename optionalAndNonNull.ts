// optinal and non null

const add = (a: number, b?: number) => a + b!
console.log(add(6,3))

const addNonNull = (a: number, b?: number) => (b ? a + b : a)
console.log(addNonNull(6))