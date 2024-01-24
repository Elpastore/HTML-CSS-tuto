/* // Creating object using ibject literal notation
person = {
    firstName: 'Abdoulaye',
    lastName: 'Sadio',
    age: 26,
    sayHello: function () {
        console.log(`Bonjour, my name is  ${this.firstName} ${this.lastName}.`);
        }
};
person.sayHello();
// Creation object using function constructor
function Command (food, price, place) {
    this.food = food;
    this.price = price;
    this.place = place;
    this.livraison = function () {
        console.log(`The command is ${this.food} and should go at ${this.place}`);
    };
}
const command = new Command('Pizza', 3000, 'Niarry Tally');
command.livraison();
command.price = 2500;
console.log(command.price);

/**
 * the difference between creating object using the literal method and the constructor method
 * is that with constructor it is really possible to create many objects without redefine the object itself
 * and without updating the code totally
 * If we take the first object person if we want to create another that hold information for another
 * we should rewrite the object or update it. so to avoid it if use object constructor
 
function Person (name) {
    const obj = {};
    obj.firstName = name;
    obj.introduceself = function () {
        console.log(`Hi I am ${obj.firstName}`);
    };
    return obj;
}
const  john = Person ('John Doe');
const sadio = Person('Abdoulaye Sadio')
john.introduceself ();
sadio.introduceself();
/**
 * As you see this method use first an empty object(dictionnary)
 * There is a best way to do it by using this
 
function Personel_info(name) {
    this.firstName = name;
    this.introduceself = function() {
        console.log (`Hello I'm ${this.firstName}`);
    };
}
const jimmy = new Personel_info("Jimmy");
jimmy.introduceself();
const Astou = new Personel_info("Astou");
Astou.introduceself(); */

class Person {
    name;
    constructor (name) {
        this.name=name;
    }
    intruduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }   
}
const john = new Person ("John Doe");
john.intruduceSelf();
class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(
        `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
        );
    }

    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade

