// array and object

let aInt = [1,2,3]
aInt.push(1)
//aInt.push("phuoc")
console.log(aInt)

let aString = ['phuoc', 'tien', 'hai']
aString.push('nhu')
//aString.push(5)
console.log(aString)

let aMixed = [5, 'nhu', true]

aMixed.push(6)
aMixed.push('nhua')
aMixed[3] = false

console.log(aMixed)


// object

let student = {
    name: 'phuoc',
    age: 24,
    isStudent: true
}

//student.name = 5
student.name = "hai"


student = {
    name: 'phuoc',
    age: 25,
    isStudent: true
}

console.log(student)