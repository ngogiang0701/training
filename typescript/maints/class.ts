class Greeter {
	greeting: string;
	constructor (message: string){
		this.greeting = message;
	}
	greet(){
		return "Hello, " + this.greeting;
	}
}

let greeter = new Greeter("world");
console.log(greeter.greet());


// Inheritance
/*
class Animal01 {
	move (distanceInmeters: number = 0){

		console.log(`Animal moved ${distanceInmeters}m.`);
	}
}

class Dog01 extends Animal01{
	bark(){
		console.log('woof! woof');
	}
}


const dog = new Dog01();

dog.bark();
dog.move(15);
dog.bark();
*/

class Animal02 {
	protected age : number;
	name: string;
	constructor (theName: string, num_age: number){
		this.name = theName;
		this.age = num_age;
	}
	move(distanceInMeters01: number = 0)
	{
		console.log(`${this.name} moved ${distanceInMeters01}m.`);
	}
	test()
	{
		console.log(`Giá trị của biến age là: ${this.age}`);
	}
}

class Snake extends Animal02 {
	constructor (name: string, age: number){super(name, age);};
	move(distanceInMeters01 = 5){
		console.log("Slithering...");
		super.move(distanceInMeters01);
	}

}

class Horse extends Animal02{
	constructor (name: string, age: number){super(name, age);};
	move(distanceInMeters01 = 45){
		console.log("Galloping...");
		super.move(distanceInMeters01);
	}
}

let sam = new Snake("Sammy the Python",10);
sam.move();
sam.test();
// Error
//console.log(sam.age);
// console.log(sam.age);

let anm = new Animal02("oizoi",12);
anm.test();
// console.log(anm.);
// let tom: Animal02 = new Horse("Tommy he Palomino");
// tom.move(34);

class Person {
    protected name: string = 'abc';
    // protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee extends Person {
    private department: string;

    // constructor(name: string, department: string) {
    //     super(name);
    //     this.department = department;
    // }
    test1()
    {
    	console.log(this.name);
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

// let howard = new Employee("Howard", "Sales");
// let john = new Person("John");
let j1 = new Employee();
j1.test1();


class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));