// first interface demo
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);
function printLV(valuelabel) {
    console.log(valuelabel.lab_vari);
}
let myObj2 = { size: 12, lab_vari1: 'NvG', lab_vari: 'Ohho' };
// console.log(myObj2.lab_vari);
printLV(myObj2);
function createSquare(config) {
    let newquare = { color: "white", area: 100 };
    if (config.color) {
        newquare.color = config.color;
    }
    if (config.width) {
        newquare.area = config.width * config.width;
    }
    return newquare;
}
let mySquare = createSquare({ color: "Black" });
console.log(mySquare);
let myS2 = createSquare({ color: 'Blue', width: 11 });
console.log(myS2);
let p1 = { x: 10, y: 20 };
//p1.x = 5; //error
let a = [1, 2, 3, 4];
let ro = a;
//ro[0] = 5;
a.push(10);
a.length = 100;
console.log(a[10]);
console.log(ro[80]);
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
console.log(mySearch('Tôi là NVG', 'NvG'));
let mys3;
mys3 = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
console.log(mys3('Tôi là NvG', 'NvG'));
let mys4;
mys4 = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
console.log(mys4('Tôi là NvG', 'NvG'));
let myArray;
myArray = ['Bob', 'Fred'];
let myStr = myArray[0];
console.log(myStr);
class Animal {
}
class Cat {
}
class Dog extends Animal {
}
let new1;
new1 = {
    ["a"]: 1,
    length: 1
};
console.log(new1["a"]);
class Clock {
    setTime(d) {
        this.currentTime = d;
    }
    constructor(h, m) {
        this.h = h;
        this.m = m;
    }
}
let d1 = new Date("Sun May 20 2018 22:05:48");
// console.log(d1);
let a1 = new Clock(20, 02);
a1.setTime(d1);
console.log(a1);
// ???????????????/