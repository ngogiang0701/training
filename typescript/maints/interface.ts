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
	[index: string]: string;
}
let myArray: StringArray;
myArray = {name12: 'Bob', name21: 'Fred'};
let myStr: string = myArray['name12'];

console.log(myStr);

class Animal{
	name: string;
}

// class Cat {
// 	hey: string;
// }
class Dog extends Animal{
	breed: string; 
}

interface NotOkay {
	[index: string] : Animal;
	[x: number]: Dog;
	
	// [z: string] : Dog;
}

interface NumberDictionary {
	[index: string] : number,
	length: number;
	// name: string;
}

// let new1: NumberDictionary;
// new1 = {
// ["a": 1];
// length: 1;
// };
// console.log(new1["a"]);
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

let a1 = new Clock(20,2);
a1.setTime(d1);
console.log(a1);


// ???????????????/

interface clkConstructor {
	new (hour: number, minute: number): clkInterface;
}

interface clkInterface {
	tick();
}

function createClock (ctor: clkConstructor, hour: number, minute: number) : clkInterface
{
	return new ctor(hour, minute);
}

class DigitalClock implements clkInterface{
	constructor(h:number, m:number){}
		tick()
		{
			console.log("beep beep");
		}
}

class AnalogClock implements clkInterface{
	constructor (h: number, m: number){}
	tick(){
		console.log("tick tock");
	}
}

let digital = createClock(DigitalClock, 12, 17);

let analog = createClock (AnalogClock, 7, 32);
digital.tick();

// console.log(digital.tick());


// extending interface

interface Shape{
	color: string;
}

interface Square extends Shape{
	sideLength: number;
}

let square = <Square>{};
square.color = 'blue';
square.sideLength = 10;
console.log(square);

class ss1 implements Square{
	color: string = 'black';
	sideLength: number = 12;
	// constructor(color?: string = 'clack', sideLength?: number = 13 ){
	// 	this.color = color;
	// 	this.sideLength = sideLength;
	// };
	

}
let ss1_01 = new ss1();

console.log(ss1_01.color);

interface Penstroke {
	penWidth: number;
}

interface Square1 extends Shape, Penstroke{
	sideLength1: number;
} 

// Hybrid Types

interface Counter {
	(start: number) : string;
	interval: number;
	reset(): void;
}

function getCounter(): Counter{

	let counter = <Counter> function (start: number){console.log(start);};
	counter.interval = 123;

	counter.reset = function(){counter.interval= 0; console.log(	'adfasdf');};
	return counter;
}

let c0 = getCounter();
// c0(10);
// c0.reset();
// c0.interval = 5.0;
c0(10);
c0.reset();
// setTimeout(() =>{
// 	console.log(c0.interval);
// },2000);
	console.log(c0.interval);



//  interface extending classes

class Control {
	private state: any;
}
interface SelectableControl extends Control{
	select(): void;
}
class Button extends Control implements SelectableControl{
	select(){};
}
class TextBox extends Control {
	select(){};
}

class Image1 extends Control implements SelectableControl{
	select(){};
}

