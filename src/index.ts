// class Person {
//     firstName: string;
//     lastName: string;
//     gender: string;
//     height: number;
//     hobbies: string[];
//     birthday: Date;
//     isAlive: boolean;


//     constructor(firstName, lastName, gender, height : any = undefined, hobbies : string[] = [], birthday : any = undefined, isAlive : boolean = true) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.gender = gender;
//         this.height = height;
//         this.hobbies = hobbies;
//         this.birthday = birthday;
//         this.isAlive = isAlive;
//     }
// };




// const firstName : string = "Seyi";
// const lastName : string = "Odediran"; 
// const gender : string = "male";
// const height : number = 1.7;
// const hobbies : string[] = ['Football', 'Basketball', 'Programming']; 
// const birthday : Date = new Date(1900,4,5);
// const isAlive : boolean = true;


// const person1 = new Person(firstName, lastName, gender, height, hobbies, birthday, isAlive)
// const person2 = new Person("Mary", "Joseph", "female");

// console.log(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`);
// console.log(`Person 2 is ${person2.firstName} whose height is ${person2.height} and hobbies are ${person2.hobbies}`)


// Interface
interface PersonData {
    firstName : string,
    lastName : string,
    gender : string,
    height? : any,
    hobbies : string[],
    birthday? : any,
    isAlive : boolean  
}

class Person {
    firstName: string;
    lastName: string;
    gender: string;
    height: number;
    hobbies: string[];
    birthday: Date;
    isAlive: boolean;


    constructor(personData : PersonData) {
        this.firstName = personData.firstName;
        this.lastName = personData.lastName;
        this.gender = personData.gender;
        this.height = personData.height;
        this.hobbies = personData.hobbies;
        this.birthday = personData.birthday;
        this.isAlive = personData.isAlive;
    }
};


const person1Data : PersonData = {
    firstName : "Seyi",
    lastName : "Odediran",
    gender : "male",
    height : "6'2",
    hobbies : [],
    birthday : new Date(1900, 10, 10),
    isAlive: true
}

const person2Data : PersonData = {
    firstName : "Mary",
    lastName : "Joseph",
    gender : "female",
    hobbies : ['Work', 'Pray', 'Play'],
    isAlive : true
}

const person1 = new Person(person1Data);
const person2 = new Person(person2Data);


console.log(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`);