// function

let square = (side: number) => {
    side += 2;
    return side * side
}
console.log(square(5))

let square2 = (side: number) => side * side
console.log(square2(5))

let greate: Function

greate = () => console.log("hello")

greate()


let add = (a: number, b: number, c?: number | string) => {
    console.log( a + b)
    console.log(c)
}

add(5, 3, "ohuoc")

let addDefault = (a:number, b: number, c: number | string = 10) => {
    console.log ("sum a b", a + b)
    console.log("c", c)
}

addDefault(5, 3, "phuoc")

let minus = (a: number, b: number, c?: number | string):string => "" + a + " " + b;

console.log(minus(3,5))