// function signature

let greet: (a: number, b: number, c:string) => void

greet = (numberOne: number, numberTwo: number, numberThree: string) => {
    console.log(numberOne, numberTwo, numberThree)
}
greet(5,7,'phuoc')