import { hasPrint } from './interfaceForClass';

export class Person implements hasPrint {
    constructor(
        public name: string,
        private age: number
    ) {}

    print = () => {
        return this.name
    }
}