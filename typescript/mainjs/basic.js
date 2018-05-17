// boolean
let ans = true;
console.log(ans);
// number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
console.log(decimal + ' ' + hex + ' ' + binary + ' ' + octal);
// string. viết 1 câu hội thoại hoàn chỉnh
let weather = "cool";
let fullname = "NvG";
let day = 4;
let date = "09/05/2018";
console.log(`Hey ${fullname}, Today is wesesday, (thứ ${day}), ${date}, the weather today is so ${weather}!`);
// array
let list = [1, 2, 3];
console.log(list);
let list1 = ['car', 'bus', 'moto'];
console.log(list1);
// tuple
// Declare a tuple type khai báo tuple
let x;
//initialize it Khởi tạo
x = ["09/05/2018", 4];
x[3] = "world";
//x[5]= true; Error
//x[5]: number=5; Error
console.log(x + ' ' + x[0].substr(1) + ' ' + x[1] + ' | ');
//console.log(x[5].toString());// Error because .... 
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Green;
console.log(c); //1 key
console.log(Color[1]); // value
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Black"] = 2] = "Black";
    Color1[Color1["Yellow"] = 3] = "Yellow";
})(Color1 || (Color1 = {}));
;
let c1 = Color1[2]; // Black
console.log(c1);
// any
let notSure = 4.456;
// notSure = "Maybe a string instead";
// notSure = false;
// notSure.ifItExists();// Errror???
// console.log(notSure.ifItExists());
console.log(notSure.toFixed(1));
console.log(notSure);
let prettySure = 4;
// prettySure.toFixed();// Error
let list2 = [1, true, "NvG"];
console.log(list2);
list2[1] = 100;
console.log(list2);
// void
function warnUser() {
    console.log('NvG');
}
warnUser();
let u = undefined;
let n = null;
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
let someValue = "this is a string";
let strLength = someValue.length;
let stringLength2 = someValue.length;
console.log(strLength);
// interface - Object
let objOne = {};
console.log(objOne);
let objTwo = {
    name: "JS",
    time: 10,
    free: true
};
let objThree = {
    name: "JS",
    time: 10
};
console.log(objTwo);
// interface - Array
let course = ["TS", "JS"];
console.log(course);
