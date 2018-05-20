// var a: number = 10;
// function fc(): void{
//     var b: string = "NvG";
//     console.log(b);
//     function fb(): void{
//         console.log(a);
//     }
//     fb();
// }
// console.log(b);
// fc();
// fb();
// for ( let i=0; i<10; i++)
// {
//     setTimeout(function() { console.log(i+'NvG'); }, 100*i);
// }
// for ( var i=0; i<10; i++){
//     console.log(i);
// }
/*
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}
*/
function f(x) {
    var x;
    var x;
    if (true) {
        var x;
    }
}
const numLive = 9;
const kity = {
    name: "Aurora",
    num: numLive
};
// let kity: any=  {
//     name: "Aurora",
//     num: numLive
// }
console.log(kity.name);
let kity1 = {
    name: "Au1",
    num: 1
};
console.log(kity1);
// array destructuring
