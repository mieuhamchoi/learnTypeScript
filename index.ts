type strArray = Array<string>
type numArray = Array<number>

const last = (arr: strArray) => arr[arr.length - 1];

let l1 = last(['p', 'z'])



const lasta = (arr: any[]) => arr[arr.length - 1];
let l4 = lasta([5,'p', 'z'])

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];

let l3 = lastT([1,2,3])
let l5 = lastT<string>(['z','z','z'])
let l6 = lastT<number>([1,2,3])


const concatAB = (a: number, b: number) => `${a} && ${b}`

concatAB(5, 7)

const concatABT = <A, B>(a: A, b: B) => `${a} && ${b}`

concatABT('z', 'x')
