// type alias

type StringOrNumber = string | number

type Student = {
    name: string
    id: StringOrNumber
}


const studentDetail = (id: StringOrNumber, studentName: string): void => {
    console.log(`Student ${studentName} has id: ${id}`)
}

studentDetail(123, 'Phuoc')
studentDetail("123", 'Phuoc')


const greet = (user: Student) => {
    console.log(`Student ${user.name} has id: ${user.id}`)
}

greet({name: 'phoc', id: 123})

let a:Student = {
    name: 'phuoc',
    id: 25
}

greet(a)