// class

export class Employee {
    // public name: string
    // private age: number
    // readonly male: boolean

    // constructor(n:string, a: number, m: boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // }
    constructor (
        public name: string, 
        private age: number, 
        readonly male: boolean
    ) {}

    seen() {
        return {
            name: this.name,
            age: this.age,
            male: this.male
        }
    }
}

let b = new Employee('henry', 30, true)

console.log(b)
console.log(b.name)
//console.log(b.age)
console.log(b.male)

b.name="nam"

console.log(b.name)

console.log(b.seen())