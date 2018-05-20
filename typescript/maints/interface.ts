// first interface demo

function printLabel ( labelledObj: {label: string}){
	console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 object"};
printLabel(myObj);

// aray review

// let myArray = [1,2,3,4,5,6];
// console.log(myArray);

// let myA1: [number, string] = [1,'2'];
// console.log(myA1);

// let myA2 = myA1;
// myA2[1] = 'Nưe';
// console.log(myA2);


interface LabelledValue {
	lab_vari: string;
}

function printLV (valuelabel: LabelledValue){
	console.log(valuelabel.lab_vari);
}

let myObj2 = {size: 12, lab_vari1: 'NvG', lab_vari: 'Ohho'};
// console.log(myObj2.lab_vari);
printLV(myObj2);

// optional Properties

interface SquareConfig {
	color?: string,
	width?: number
}

function createSquare(config: SquareConfig): {color: string; area:number}
{
	let newquare = {color: "white", area: 100};
	if (config.color)
	{
		newquare.color = config.color;
	}
	if(config.width)
	{
		newquare.area = config.width * config.width;
	}

	return newquare;

}

let mySquare = createSquare({color: "Black"});
console.log(mySquare);

let myS2 = createSquare({color: 'Blue', width: 11});
console.log(myS2);
// readonly properties

interface Point {
	readonly x: number,
	readonly y: number

}

let p1: Point = {x:10, y:20};

//p1.x = 5; //error

let a: number[] = [1,2,3,4];
 let ro: ReadonlyArray<number> =a;
//ro[0] = 5;
a.push(10);
a.length = 100;
console.log(a[10]);
console.log(ro[80]);


interface searchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: searchFunc;
mySearch = function (source: string, subString: string){
	let result = source.search(subString);
	return result > -1;
}
console.log(mySearch('Tôi là NVG','NvG'));

let mys3: searchFunc;
mys3 = function (src: string, sub: string): boolean{
	let result = src.search(sub);
	return result > -1;
}

console.log(mys3('Tôi là NvG','NvG'));


let mys4: searchFunc;
mys4 = function (src, sub){
	let result = src.search(sub);
	return result > -1;
}

console.log(mys4('Tôi là NvG','NvG'));

// indexable types
// ????????????
interface StringArray {
	[index: number]: string;
}
let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];

console.log(myStr);

class Animal{
	name: string;
}

class Cat {
	hey: string;
}
class Dog extends Animal{
	breed: string; 
}

interface NotOkay {
	// [x: number] : Cat;
	[z: string] : Dog;
	
	// [z: string] : Dog;
}

interface NumberDictionary {
	[index: string] : number,
	length: number;
	// name: string;
}

let new1: NumberDictionary;
new1 = {
["a": 1];
length: 1;
};
console.log(new1["a"]);
// ???????????????????


//  class type

interface ClockInterface {
	currentTime: Date;
	setTime(d: Date);
}

class Clock implements ClockInterface{
	currentTime: Date;
	setTime(d:Date){
		this.currentTime = d;
	}
	h: number;
	m: number;
	constructor(h: number, m:number){
		this.h = h;
		this.m =m;
	}
}

let d1 = new Date("Sun May 20 2018 22:05:48");
// console.log(d1);

let a1 = new Clock(20,02);
a1.setTime(d1);
console.log(a1);


// ???????????????/