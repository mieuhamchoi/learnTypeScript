import { Person } from "./classImplementsInterface";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Person('phuoc', 25);
const documentTwo: hasPrint = new Person('hai', 30);

let documentArray: hasPrint[] = [];

documentArray.push(documentOne)
documentArray.push(documentTwo)

console.log(documentArray)