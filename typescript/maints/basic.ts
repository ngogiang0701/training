// boolean
let ans = true;
console.log(ans);

// number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(decimal+' ' + hex +' '+ binary +' '+ octal);


// string. viết 1 câu hội thoại hoàn chỉnh

let weather: string = "cool";
let fullname: string = "NvG";
let day: number = 4;
let date: string ="09/05/2018";

console.log(`Hey ${fullname}, Today is wesesday, (thứ ${day}), ${date}, the weather today is so ${weather}!`);

// array

let list: number[] =[1,2,3];
console.log(list);

let list1: Array<string> = ['car', 'bus', 'moto'];
console.log(list1);


// tuple

// Declare a tuple type khai báo tuple
let x: [string, number];

//initialize it Khởi tạo
x=["09/05/2018",4];
x[3] = "world";
//x[5]= true; Error
//x[5]: number=5; Error
console.log(x+' '+x[0].substr(1) + ' '+x[1] +' | ');
//console.log(x[5].toString());// Error because .... 


//Enum

enum Color {Red, Green, Blue};

let c: Color = Color.Green;

console.log(c);//1 key
console.log(Color[1]);// value

enum Color1 {Red=1, Black, Yellow};
let c1: string = Color1[2];// Black
console.log(c1);

// any

let notSure: any =4.456;


// notSure = "Maybe a string instead";
// notSure = false;

// notSure.ifItExists();// Errror???
// console.log(notSure.ifItExists());
console.log(notSure.toFixed(1));


console.log(notSure);

let prettySure: Object =4;
// prettySure.toFixed();// Error

let list2: any[] =[1, true, "NvG"];
console.log(list2);
list2[1] = 100;
console.log(list2);


// void

function warnUser(): void{
	console.log('NvG');
}
warnUser();

let u: undefined = undefined;
let n: null = null;
console.log(u);
console.log(n);

// never

// Function returning never must have unreachable end point
// function error(message: string): never{
// 	throw new Error(message);
	
// }

// Inferred return type is never

// function fail(){
// 	return error("Something failed");
// }
// fail();



// type assertions chuyển đổi linh hoạt giữa các kiểu dữ liệu

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
let stringLength2: number = (someValue as string).length;
console.log(strLength);


// interface - Object

let objOne: any = {};
console.log(objOne);

interface CourseInterface {
	name: string;
	time: number;
	free?: boolean;
}

let objTwo: CourseInterface = {
	name: "JS",
	time: 10,
	free: true
};

let objThree: CourseInterface = {
	name: "JS",
	time: 10
};


console.log(objTwo);

// interface - Array

let course: string[] =["TS","JS"];

console.log(course);