// class Person {
//     firstName: string;
//     lastName: string;
//     gender: string;
//     height: number;
//     hobbies: string[];
//     birthday: Date;
//     isAlive: boolean;
class Person {
    constructor(personData) {
        this.firstName = personData.firstName;
        this.lastName = personData.lastName;
        this.gender = personData.gender;
        this.height = personData.height;
        this.hobbies = personData.hobbies;
        this.birthday = personData.birthday;
        this.isAlive = personData.isAlive;
    }
}
;
const person1Data = {
    firstName: "Seyi",
    lastName: "Odediran",
    gender: "male",
    height: "6'2",
    hobbies: [],
    birthday: new Date(1900, 10, 10),
    isAlive: true
};
const person2Data = {
    firstName: "Mary",
    lastName: "Joseph",
    gender: "female",
    hobbies: ['Work', 'Pray', 'Play'],
    isAlive: true
};
const person1 = new Person(person1Data);
const person2 = new Person(person2Data);
console.log(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is ${person1.birthday}`);
//# sourceMappingURL=index.js.map