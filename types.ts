// TypeScript Types
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number, any]; // Set different types in this array

myString = 'Hello'.slice(0,3);
myNum = 3 * 3;
myBool = false;
myVar = true;

strArr = ['Hello','World'];
numArr = [1,2,3,4,5,];
boolArr = [true, false, false, true];

strNumTuple = ['Hi', 7, false];

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = null;

console.log(myNull);