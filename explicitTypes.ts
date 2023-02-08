// explicitTypes

let a:number = 6
a = 5
//a = "p"

let aInt:[number]

aInt = [6]
//aInt = [6, 'p']

let mix:(number | string | boolean)[]

mix = [5, 'p', true]

let abc: 'nam'| 'phuoc'

abc = 'nam'

let person:object
person = {name: 'abc', age: 25}
person = []

let student: {
    name: string,
    age: number,
    isStudent: boolean
}
student = {name: 'phuoc', age: 25, isStudent: true}