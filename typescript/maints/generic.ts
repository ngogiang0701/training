console.log('NvG');
function identity<T>(arg: T): T {
   console.log(arg); return arg;
}
identity(12);

function loggingIdentity<T>(arg: T): T {
	let arg1 = <string>arg;
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

function loggingIdentity1<T>(arg: any): any {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

function loggingIdentity2<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
loggingIdentity2(['a10','a112']);


function identity121<T>(arg: T): T {
    return arg;
}

let myIdentity: <U>(arg: U) => U = identity121;


interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity112<T>(arg: T): T {
    return arg;
}

let myIdentity112: GenericIdentityFn = identity112;