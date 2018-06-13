console.log('NvG');
function identity(arg) {
    console.log(arg);
    return arg;
}
identity(12);
function loggingIdentity(arg) {
    let arg1 = arg;
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
function loggingIdentity1(arg) {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
loggingIdentity2(['a10', 'a112']);
function identity121(arg) {
    return arg;
}
let myIdentity = identity121;
function identity112(arg) {
    return arg;
}
let myIdentity112 = identity112;
