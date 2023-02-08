// interface

interface Person {
    name: string,
    age: number,
    seen(text: string):void,
    sum(numberOne: number, numberTwo: number):number
}

let pero: Person = {
    name: "Pero",
    age: 25,
    seen(t: string) {
        console.log(t)
    },
    sum(one: number, two: number) {
        return one  + two
    }

}

//console.log(pero.seen('abc'))


let textInterface = (onePerson: Person) => {
    console.log(onePerson.seen("789"))
}

textInterface(pero)