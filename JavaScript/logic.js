// console.log("I'm coming from external JS!");

// Old Way of Declaration

// var name = "Harry";
// var age = 23;
// console.log(age);
// console.log(name);

// ========================================================================

// Naming convention:
//  Camel Casing
//  No number as the first character
//  No reserved keywords

// ========================================================================

// Second way of declaring variable

// let age = 20;

// Third way of declaring variable

// const name = "tom";

// console.log(age, name);

// ==========================================================================

// Reassignment of Variables

// age = 20;
// console.log(age);

// ==========================================================================

// Redeclaration of variables is possible in Var only

// var firstName = "Joy";
// console.log(firstName);

// ==========================================================================

// Primitive Data Types

// 1- Numbers
let age = 21;
console.log(age);
console.log(typeof age);

console.log("====================================================");

// 2- String
let totalSavings = "$500";
console.log(totalSavings);
console.log(typeof totalSavings);

console.log("====================================================");

// 3- Boolean
let isItRaining = true;
console.log(isItRaining);

console.log("====================================================");

// 4- Undefined
let name;
console.log(typeof name);

console.log("====================================================");

// 5- Null

let hobbies = null;
console.log(typeof hobbies);

// 6- BigInteger
// 7- Symbole

// ==========================================================================

console.log("====================================================");

// Object Data Types

// 1- Array
let myDetail = [25, "Ali", true];
console.log(typeof myDetail);
console.log(myDetail);

console.log("====================================================");

// 2- Objects
// key:'value'
// {}

let studentDetail = {
  name: "Ali",
  age: 36,
  hobbies: ["Singing", "Reading"],
};
console.log(typeof studentDetail);
console.log(studentDetail);

// ==========================================================================

console.log("====================================================");

// Operators
// 1- Arithmetic
// 2- Assignment
// 3- Comparison

// ==========================================================================

// 1- Arithmetic Operators

// Addition
let sum = 3 + 4;
console.log(sum);

console.log("====================================================");

// Subtraction
let a = 7;
let b = 4;
let c = a - b;
console.log(c);

console.log("====================================================");

// Multiplication
let x = 5 * 10;
console.log(x);

console.log("====================================================");

// Division
let y = 10 / 2;
console.log(y);

console.log("====================================================");

// Remainder / Modulus
let z = 10 % 2;
console.log(z);

console.log("====================================================");

// ==========================================================================

// 2- Assignment Operators
let firstNumber = 10;
let secondNumber = 20;

// Compound Assignment

let compound = 10;
compound += 5;
compound = compound + 5;
console.log(compound);

compound %= 3;
console.log(compound);

// ==========================================================================

// 2- Comparison Operators

// Equal

let num1 = 10;
let num2 = 20;
let num3 = 10;
let text = "20";
console.log(num1 == num2);
console.log(num1 == num3);

console.log("====================================================");

// greater and less than sign

console.log(num1 > num2);
console.log(num1 < num3);
console.log(num1 <= num3);
console.log(num1 >= num2);

console.log("====================================================");

// NOt equal: != ............. Strictly not equal: !==

console.log(num1 != num2);
console.log(text != num2);
console.log(text !== num2);

console.log("====================================================");

// ==========================================================================
// Logical Operators

// 1- AND
// 2- OR
// 3- NO

let numberA = true;
let numberB = false;
let numberC = true;
let numberD = true;
let numberE = false;
console.log(numberB && numberA && numberD);
console.log(numberA && numberD && numberC);

console.log("====================================================");

// OR
console.log(numberB || numberA);
console.log(numberE || numberB);

console.log("====================================================");

// NOT: !
console.log(!numberA);
console.log(!numberE);

// ==========================================================================
// Increment Operators

let myNum1 = 10;
myNum1 = myNum1++;
console.log(myNum1);

let myNum2 = 10;
myNum2 = ++myNum2;
console.log(myNum2);

// ==========================================================================
// Decrement Operators

let myNum3 = 9;
myNum3 = myNum3--;
console.log(myNum3);

let myNum4 = 10;
myNum4 = --myNum4;
console.log(myNum4);

// ==========================================================================
// Exponentioal Operators

// ==========================================================================
// Type Coversion

// Manual we do it
// String, Numbers, Boolean

let data1 = 100;
console.log(typeof data1);

let str = "100";
console.log(typeof str);

let data2 = String(data1);
console.log(typeof data1);
console.log(typeof str);
console.log(typeof str);

let newNum = 3.14;
console.log(typeof c);
console.log(typeof String(c));

// Boolean

let xy = true;
console.log("Result: ", xy, typeof xy);
let yz = String(xy);
console.log("Result", yz, typeof yz);

// NUll

let p = null;
let r = String(p);
console.log(p, typeof p);
console.log(r, typeof r);

// Undefine

console.log(typeof undefined);
console.log(typeof String(undefined));

// =================================================================================

let savings = 150;
console.log(savings, typeof savings);

let stringValue = savings.toString();
console.log(stringValue, typeof stringValue);

// =============================================================================================

// Coverting string to number

let strNum = "100";
let result = Number(strNum);
console.log(strNum, typeof strNum);
console.log(result, typeof result);

let strValue = "abcd";
let strNumValue = Number(strValue);
console.log(strValue, typeof strValue);
console.log(strNumValue, typeof strNumValue);

let isEarthRound = true;
console.log(isEarthRound, typeof isEarthRound);

let numResult = Number(isEarthRound);
console.log(numResult, typeof numResult);

let isWaterGreen = false;
console.log(isWaterGreen, typeof isWaterGreen);

numResult = Number(isWaterGreen);
console.log(numResult, typeof numResult);

// let xyz = prompt(alert("Enter the number: "));
// console.log(xyz, typeof xyz);

// let abc = Number(xyz);
// console.log(++abc);

//=====================================================

// truthy and falsy values

// number = 0
// String =""
// undefine =
// null
// NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(1));

// ===========================================================================

// Type Coercion
// To String Coercion

let abcd = "12";
let ute = 2 + "12";
console.log(ute);

console.log(12 + "5" + true);
console.log("25" + NaN);

// Implicit Number Conversion with other operators - No addition

console.log("32" - 10);
console.log("32" * 10);
console.log("32" / 10);

// Implic

console.log("How are you" - 10); // NaN

console.log(true - 8); // -7
console.log(false - 8); // -8
console.log(false / 8); // -8

console.log(10 % false); // NaN
console.log(10 % 2); // 0
console.log(10 % 3); // 1

// ===================================================================================

// Control flow statements: Decision Making Statment = if and if else

// if(this condition is true){
//   perform soomthing
// }

// let mm = 10;

// if (mm) {
//   console.log("mm is truthy value");
// }

// if (Boolean(mm)) {
//   console.log("mm is truthy value");
// }

let yy = 5;

if (yy > 6) {
  console.log("yy is greater than 6");
} else if (yy < 6) {
  console.log("yy is less than 6");
} else {
  console.log("yy is not 6 at all");
}
console.log("This is outside if else statement");

// Ternary Operators ==> It only work with If condition

// let result1 = condition ? value1 : value2;

let marks = 72;
let reasultOfMarks = marks >= 50 ? "Pass" : "Fail";
console.log(reasultOfMarks);

let resultOfMarks2 = marks >= 80 ? "Pass" : "Fail";
console.log(resultOfMarks2);

// Short Circuting
// AND => &&
// OR => ||

// AND Operator

let abcds = true && true && false;
console.log(abcds);

let lll = true && false;
console.log(lll);

let myMarks = 72;

bbb = myMarks < 50 && "Pass";
console.log(bbb);

bbb = "cate" && "dog";
console.log(bbb);

bbb = "cate" && "dog" && "" && "elephant";
console.log(bbb);

bbb = 0 && "dog";
console.log(bbb);

console.log("====================================================");

// ==========================================================================

// OR  Operator
// It will return the first true value
// If all operands are false, then the result woould be false.

let myMark = 72;

cc = myMarks > 50 || "Pass";
console.log(cc);

cc = "cate" || "dog";
console.log(cc);

cc = true || false;
console.log(cc);

cc = ("cate" && "dog") || "elephant";
console.log(cc);

cc = "dog" || ("elephanr" && "cat");
console.log(cc);

let dd = "" || false || "This the last value";
console.log(dd);

dd = "" || false || null;
console.log(dd);

console.log("===============================================================");
// ==========================================================================

// Loops in JavaScript

// For loop
// While loop
// Do While loop

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

console.log("================================================================");
// ==========================================================================

for (let i = 1; i <= 15; i++) {
  console.log(i);
}
console.log("i reached 7");

console.log("================================================================");
// ==========================================================================

// for (let i = 1; i <= 7; i += 3) {
//   console.log(i);
// }
// console.log("i reached 7");

// console.log("================================================================");
// // ==========================================================================

// for (let i = 9; i > 0; i--) {
//   console.log(i);
// }
// console.log("i reached 0");

// console.log("================================================================");
// // ==========================================================================

// // While loop

let i = 1;
while (i <= 7) {
  console.log(i);
  console.log("Still in while loop");
  i++;
}
console.log("Outside while loop");

// Enhance Loop

console.log("================================================================");
// ==========================================================================

// Break and Continue

// Break

for (let i = 1; i < 9; i++) {
  if (i === 5) {
    break; // Stops the loop at 5
  }
  console.log(i);
}
console.log("Outside the for loop");

// Continue Statement

for (let i = 1; i < 9; i++) {
  if (i === 5) {
    continue; // Skip 5 and continue with 6 onwoard
  }
  console.log(i);
}
console.log("Outside the for loop");

console.log("================================================================");
// ==========================================================================

// Functions/methods in javascript

console.log("Name is Harry");
console.log("Age is 24");
console.log("Love to play tennis");
console.log("Favourite fruit is Apple");

console.log("================================================================");

console.log("There 3 types of functions");

console.log("================================================================");

// Function Declaration

function printStudentDetails() {
  console.log("Name is Harry");
  console.log("Age is 29");
  console.log("Love to play tennis");
  console.log("Favourite fruit is Apple");
}

printStudentDetails();
console.log("================================================================");
printStudentDetails();
console.log("================================================================");
printStudentDetails();

console.log("================================================================");

// Function Expression

let studentDetailInfo = function () {
  console.log("Name is Harry");
  console.log("Age is 30");
  console.log("Love to play tennis");
  console.log("Favourite fruit is Apple");
};

studentDetailInfo();
console.log("================================================================");
studentDetailInfo();
console.log("================================================================");
studentDetailInfo();

console.log("================================================================");

// Paramaeters and Arguments

let functionWithParamaeters = function (name, age, sport, fruit) {
  console.log(`name is ${name}`);
  console.log(`age is ${age}`);
  console.log(`Love to play ${sport}`);
  console.log(`Favorite fruit is ${fruit}`);
};

console.log("================================================================");
functionWithParamaeters("Joy", 26, "Basketball", "Orange");
console.log("================================================================");
functionWithParamaeters("Smith", 20, "Soccer", "Apple");
console.log("================================================================");
functionWithParamaeters("Sarah", 38, "Tennis", "Watermelon");
console.log("================================================================");
functionWithParamaeters("Dave", 45, "Valleball", "Grapes");
console.log("================================================================");

// Default Paramaeters

function defaultParamFunction(a, b) {
  let sum = a + b;

  console.log(sum);
}

defaultParamFunction(5, 8);

console.log("================================================================");

function defaultParamFunction(c, d) {
  d = d || 10; // This line gives us default value
  let sum = c + d;

  console.log(sum);
}

defaultParamFunction(1);

console.log("================================================================");

// Arrow Function

let detailArrowFunction = () => {
  console.log("Name is Harry");
  console.log("Age is 30");
  console.log("Love to play tennis");
  console.log("Favourite fruit is Apple");
};
detailArrowFunction();

console.log("================================================================");

let printMultiplication = (x, y) => console.log(x * y);
printMultiplication(5, 10);

console.log("================================================================");

let detailOfStudent = (firstName, age, fruit, sport = "Soccer") => {
  console.log(firstName);
  console.log(age);
  console.log(fruit);
  console.log(sport);
};
detailOfStudent("John", 36, "apple");

console.log("================================================================");

let printSum = (num1) => {
  let num2 = 50;
  console.log(num1 + num2);
};
printSum(10);

console.log("================================================================");

const cutAppleInPieces = function (fruitNumber) {
  console.log("Number of fruits: ", fruitNumber);
  console.log("Number of pieces: ", fruitNumber * 4);
  let result = fruitNumber * 4;
  return result;
};
let piecesNumber = cutAppleInPieces(2);
console.log(piecesNumber);

console.log("================================================================");

const fruitProcessor = function (appleNumber, orangesNumber) {
  let applePieces = cutAppleInPieces(appleNumber);
  let orangePieces = cutAppleInPieces(orangesNumber);
  console.log(
    `Apple pieaces are ${applePieces} and orange pieces are ${orangePieces}`
  );
};

console.log("================================================================");

const calcAge = function (currentYear, birthYear) {
  let age = currentYear - birthYear;
  console.log(age);
  return age;
};
const ageFound = calcAge(2023, 2000);
console.log(ageFound);

console.log("================================================================");

// ====== CALLBACK FUNCTION ============

function greet(name, callBackFunc) {
  console.log("Hi, my name is " + name);
  callBackFunc();
}

function whatIsTheDateToday() {
  console.log("Today's 03/09/2023");
}
greet("Ali", whatIsTheDateToday);

// ========== STRINGS ==================

// =========== Double Quotes ============

let myFirstName = "Ali";

// =========== Single Quotes ============

let mySpoer = "Soccer";

// =========== BACKTICKS ====================

let city = `Alexandria`;
console.log(`1 + 2 = ${1 + 2}`);

// ============= String Manipulation ==================

let greetings = "How are you? I'm fine, thanks a lot for the greetings";

console.log(greetings);

console.log(greetings[2]); // Accessing a particular character in string
console.log(greetings.charAt(6)); // Accessing a particular character in string

console.log("================================================================");

console.log(greetings.indexOf("t")); // Checking the index of a specific character
console.log(greetings.lastIndexOf("t")); // Checking the last index of a specific character

console.log("================================================================");

let greetingMessage = "Hello buddy, how are you?";

console.log(greetingMessage);
let subStr = greetingMessage.slice(7, 16);
console.log(greetingMessage);
console.log(subStr);

console.log("================================================================");

console.log(greetingMessage.length); // Total number of characters in String

console.log("================================================================");
console.log(greetingMessage.toUpperCase()); // Convering all characters to UPPERCASE

console.log("================================================================");
console.log(greetingMessage.toLocaleLowerCase()); // Convering all characters to lowercase

console.log("================================================================");
let trimedMessage = "    Javascript is awesome!";

console.log(trimedMessage.trim);
console.log(trimedMessage.length);

console.log("================================================================");

const myNewString = greetingMessage.replace("Hello", "Hi"); // Replace character or word in string
console.log(myNewString);

let myString = "How are you? How was your holiday? How is the destination?.";
myString = myString.replace(/\bHow?\b/gi, "Where");
console.log(myString);

console.log("================================================================");

// ============ Concatenation ==========================

let jan = "Jan";
let ali = "Ali";
let faizi = "Faizi";

let theResult = jan.concat(" ", ali, " ", faizi);
console.log(theResult);

// ============ ARRAYS ==========================

// Array index starts with 0
// Arrays can hold multiple data and multiple data type

// COntractining Arrays:

// 1 - Arrays Literals
const myFirstArray = ["H", "e", "l", "l", "o"]; // It is orderwise and homogenouse
console.log(myFirstArray);

console.log("================================================================");

// 2 - New Keywords
const myHobbies = new Array("Reading", "Swimming", "Writing"); // Non Sequential
console.log(myHobbies);

console.log("================================================================");

// ========== TYPES OF ELEMENTS ARRAY CAN HOLD =========================

const emptyArray = []; // Empy Array
console.log(emptyArray);

console.log("================================================================");

const numArray = [1, 2, 3, 4, 5, 6]; // Number Array
console.log(numArray);

console.log("================================================================");

const mixedArray = [
  //Mixed Arrays
  "Ali",
  "Faizi",
  23,
  8,
  true,
  function greeting() {
    console.log("Hello World");
  },
];
console.log(mixedArray);

console.log("================================================================");

const nestedAray = ["Walk", 58, ["eat", true, 24]]; // Nested Arrays
console.log(nestedAray);

console.log("================================================================");

// const itemListed = () => {}; // Arrow Function

// Array Methods

// 1. arrName.map()

const arrNum = [1, 2, 3, 4, 5, 6];
const resultArr = arrNum.map((eachElement) => eachElement * 2);
console.log(arrNum);
console.log(resultArr);

console.log("================================================================");

const arrNum2 = [7, 8, 9];
const resultArr2 = arrNum2.map((el) => el + 10);
console.log(arrNum2);
console.log(resultArr2);

console.log("================================================================");

// ============================ Filter Method ======================

// Will create a new array with only those elements that passes the condition

const arrNum3 = [1, 2, 3, 4, 5, 6];
// Syntax: arrName3.filter()
const resultArr3 = arrNum3.filter((el) => el < 5);
console.log(arrNum3);
console.log(resultArr3);

console.log("================================================================");

const arrNum4 = [1, 2, 3, 4, 5, 6];
// Syntax: arrName4.filter()
const resultArr4 = arrNum4.filter((el) => el === 2 || el === 4);
console.log(arrNum4);
console.log(resultArr4);

console.log("================================================================");

const arrNum5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Syntax: arrName5.filter()
const resultArr5 = arrNum5.filter(
  (el) => el === 2 || el === 4 || el === 5 || el === 8
);
console.log(arrNum5);
console.log(resultArr5);

console.log("================================================================");

const arrNum6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Syntax: arrName5.filter()
const resultArr6 = arrNum6.filter((el) => el % 2 === 0);
console.log(arrNum6);
console.log(resultArr6);

console.log("================================================================");

// ============================ Sort Method ======================

const arrNum7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Descending Order
// Syntax: arrName5.sort()
const resultArr7 = arrNum7.sort((a, b) => b - a);
console.log(resultArr7);

console.log("================================================================");

const arrNum8 = [10, 2, 34, 5, 60]; // Ascending Order
// Syntax: arrName5.sort()
const resultArr8 = arrNum8.sort((a, b) => (a < b ? -1 : 1));

console.log("================================================================");

console.log(resultArr8);

const arrNum9 = [10, 2, 34, 5, 60]; // Descending Order
// Syntax: arrName5.sort()
const resultArr9 = arrNum9.sort((a, b) => (a < b ? 1 : -1));
console.log(resultArr9);

console.log("================================================================");

// =========== For Each Loop ===========

const arrNum10 = [1, 2, 3, 4, 5, 6, 7];
// Syntax: arrName5.foreach()
arrNum10.forEach((el) => el * 4);
const newArrWIthMap = arrNum10.map((el) => el * 4);
console.log(arrNum10);
console.log(newArrWIthMap);

console.log("================================================================");

// =========== 5 Ocean Values ===========

const ocean1 = "Pacific";
const ocean2 = "atlantic";
const ocean3 = "Indian";
const ocean4 = "Arctic";
const ocean5 = "Antaractica";

// In Arrays

let oceans = ["Pacific", "atlantic", "Indian", "Arctic", "Antaractica"];
console.log(oceans);

console.log("================================================================");

// Access a particular element

console.log(oceans[3]);

let oceansLife = [
  "Pacific",
  "atlantic",
  "Indian",
  "Arctic",
  "Antaractica",
  ["Fish", "Turtle", ["Shark", "Octopus", "whale"]],
];
let aquticLife = oceansLife[5][2][1];

console.log(aquticLife);

console.log(oceansLife.length);

console.log("================================================================");

// Concatentation of Arrays = Applies on multiple arrays

let oceans2 = ["Pacific", "atlantic", "Indian", "Arctic", "Antaractica"];

let aquticLife2 = ["Fish", "Turtle", "Shark", "Octopus", "whale"];

let oceanLifeAndAquaticLife = oceans2.concat(aquticLife2);

console.log(oceans2);
console.log(aquticLife2);
console.log(oceanLifeAndAquaticLife);

console.log("================================================================");

// ============  Every Method ===========
// arr.arrays()

const arrNum11 = [10, 20, 30, 40, 50];
// console.log(arrNum11.every((num) => num > 30));

const arrNum11Result = arrNum11.every((num) => num > 30);

console.log(arrNum11Result);

console.log("================================================================");

// ============  SOme Method ===========
// arr.arrays()

console.log(arrNum11.some((num) => num > 30));

console.log("================================================================");

// ============  Includes Method ===========
// arr.arrays()

console.log(arrNum11.includes(30));

console.log("================================================================");

// ============  Joins Method ===========
// arr.arrays()
// Applies on single array of Strings

let arrOfString = ["Hello", "how", "are", "you", "?"];
let arrStrJoins = arrOfString.join(" ");
console.log(arrStrJoins);

console.log("================================================================");

// Total Number of numbers in an array
// reduce method

const arrNumeric = [10, 20, 30, 40, 50];
const arrNumericResult = arrNumeric.reduce((total, current) => total + current);
console.log(arrNumericResult);

console.log("================================================================");

// Find method
console.log(arrNumeric.find((num) => num > 40));

console.log("================================================================");

// IndexOf method
// let IndexOfoceansElement = ["Pacific", "Atlantic", "Indian", "Arctic", "Antaractica"];
// console.log(IndexOfoceansElement.findIndex(element) => element === "Atlantic"));

console.log("================================================================");

// Slice method
let animals = ["Lion", "Tiger", "Bear", "Elephant", "Deer"];
let herbi = animals.slice(3, 5);
console.log(animals);
console.log(herbi);

console.log("================================================================");

// Reverse method
const arrNumericReverse = [10, 20, 30, 40, 50];
arrNumericReverse.reverse();
console.log(arrNumericReverse);

console.log("================================================================");

// Push, Pull, Shift, Unshift, methods

let fruites = ["Apple", "Peach"];
fruites.push("Pears");
console.log(fruites);

console.log("================================================================");

console.log(fruites.pop());

console.log("================================================================");

fruites.unshift("Pear");
console.log(fruites);

console.log("================================================================");

fruites.shift();
console.log(fruites);

console.log("================================================================");

// Removing a spefici element from the array with Filter methods

let fruites2 = ["Orange", "Apple", "Peach"];
console.log(fruites2.filter((element) => element !== "Apple"));

console.log("================================================================");

// Removing a spefici element from the array with Splice methods

let fruites3 = ["Orange", "Apple", "Peach", "Pear", "Grapes"];
console.log(fruites3.splice(3));

console.log("================================================================");

// For each methods

const arrNumeric3 = [1, 2, 3, 4, 5];

let total = 0;

arrNumeric3.forEach((element) => {
  total += element;

  return total;
});

console.log(total);

console.log("================================================================");

// ============ Arrays De-Structuring ===========

const myDetails = ["Ali", 36, ["Cycling", "Reading"], ["Mango", "Apple"]];
console.log(myDetails);

const [myname, myage, myhobbies, fruits] = myDetails;

console.log(myname);
console.log(myage);
console.log(myhobbies);
console.log(fruits);

console.log("================================================================");

const myNumberArray = [1, 2, [4, 5], 6];
console.log(myNumberArray);

const [one, two, [four, five], six] = myNumberArray;

console.log(one);
console.log(two);
console.log(four);
console.log(five);
console.log(six);

console.log("**************************************************************");
console.log("**************************************************************");
console.log("**************************************************************");

// ======================= OBJECTS IN JAVASCRIPT =======================

// non primitive
// contains properties: key-value pairs
// Un-Ordered

// Object constractor with New Keyword

const objWithNewKeyword = new Object();

// Object Literals

const objLiterals = {};

// Putting values in Object

// ====================================================================

const objLiterals1 = {
  name: "Ali",
  age: 25,
  hobbies: ["Cycling", "Reading"],
};

// .Notation to access the values
console.log(objLiterals1.age);
console.log(objLiterals1.age, objLiterals1.hobbies, objLiterals1.name);

console.log("================================================================");

// Bracket Notation to access the values
console.log(objLiterals1["name"]);

console.log("================================================================");

const listOfEmp = {
  boss: "Michael",
  secretary: "Angela",
  salesRep: "John",
  accounttant: "Oscar",
  year: 2013,
};

// Accessing Keys
const keysArray = Object.keys(listOfEmp);
console.log(keysArray);

console.log("================================================================");

// Accessing Values
const keysArrayValue = Object.values(listOfEmp);
console.log(keysArrayValue);

//==============================================

// Object.Entries

// It separates each key and value pair in the form of array
const entriesArr = Object.entries(listOfEmp);
console.log(entriesArr);

console.log("================================================================");

const loginDetails = {
  userName: "jaf",
  password: "jaf@1234!",
};

console.log(loginDetails);
loginDetails.userName = "ChangesUserName";
console.log(loginDetails);

console.log("================================================================");

// ======= FREEZ ===================

const newUSerLogin = Object.freeze(loginDetails); // It prevents changing the uswername

newUSerLogin.userName = "CannotBeChange";
newUSerLogin.password = "CannotBeChange";
newUSerLogin.subscribed = true;
console.log(newUSerLogin);

console.log("================================================================");

// ================ SEAL ==============
const newUSerLogin1 = Object.seal(loginDetails);
newUSerLogin1.password = "****************";
newUSerLogin1.subscribed = false;
console.log(newUSerLogin1);

console.log("================================================================");

// ================ Object De-Structuring ==============

const bookDetails = {
  id: 1,
  title: "Adventures With Sherlok Holms",
  date: "10/10/2023",
  author: {
    firstName: "Harry",
    lastName: "Smith",
  },
};

const { title, date, author } = bookDetails;
console.log(title);
console.log(date);
console.log(author);
const { firstName, lastName } = author;
console.log(firstName);
console.log(lastName);

console.log("================================================================");

// ================ Array of Objects ==============

const myBooksDetail = [
  {
    id: 1,
    title: "Adventures With Sherlok Holms",
    date: "10/10/2023",
    author: {
      firstName: "Harry",
      lastName: "Smith",
    },
  },
  {
    id: 2,
    title: "Adventures With Sherlok Holms",
    date: "10/10/2023",
    author: {
      firstName: "Harry",
      lastName: "Smith",
    },
  },
  {
    id: 3,
    title: "Adventures With Sherlok Holms",
    date: "10/10/2023",
    author: {
      firstName: "Harry",
      lastName: "Smith",
    },
  },
];

console.log("================================================================");

// ================================ Object Manopulation =======================

const bookDetails2 = {
  id: 1,
  title: "Dance in the mosque",
  date: "10/10/2023",
  author: {
    firstName: "Harry",
    lastName: "Smith",
  },
};
const { title: bookName } = bookDetails2;
console.log(bookName);
console.log(title);

console.log("================================================================");

// =========== SPREAD OPERATORS WITH ARRAYS ===================

// When we add more values
let myFavFruits = ["Apple", "Orange", "Cherries"];
console.log(myFavFruits);
let newFavFruitsList = ["Banana", ...myFavFruits, "Kiwi"];
console.log(newFavFruitsList);

// Spread Operator while invoking function

let printFruitNames = (fruit1, fruit2, fruit3) =>
  console.log(fruit1, fruit2, fruit3);

console.log("================================================================");

// =========== SPREAD OPERATORS WITH OBJECTS ===================

let object1 = { id: 1, name: "Ali" };
let object2 = { age: 25, country: "USA" };

const objResult = { ...object1, ...object2 };
console.log(objResult);

console.log("================================================================");

// =========== REST PARAMETER WITH OBJECTS ===================

function additionOfInputsRecieved(...args) {
  console.log(args);
  let sum = args.reduce((total, current) => total + current);
  console.log(sum);
  return sum;
}
additionOfInputsRecieved(1, 3, 5);
additionOfInputsRecieved(10, 20, 30, 50, 60, 80);

console.log("================================================================");

function additionOfInputsRecieved2(operator, ...args) {
  console.log(args);
  if (operator === "+") {
    let sum2 = args.reduce((total, current) => total + current);
    console.log(sum2);
    return sum2;
  }
}
additionOfInputsRecieved2(10, 20, 30, 50, 60, 80);

console.log("================================================================");

// ===================== DOM ==============================================================

// get element by ID

let paraInfo = document.getElementById("paraOne");
console.log(paraInfo);

console.log("================================================================");

// get element by name

let eleByName = document.getElementsByName("serviceRating");
console.log(eleByName);

console.log("================================================================");

// get element by class name

let eleByClassName = document.getElementsByClassName("listItem");
console.log(eleByClassName);

console.log("================================================================");

// get element by tag name

let eleByTagName = document.getElementsByTagName("p");
console.log(eleByTagName);

console.log("================================================================");

const ageInYear = (days) => days / 365;
console.log(ageInYear(365));
console.log(ageInYear(22000));

// ====================  Query Selector ===============================

// Universal or global selector = *
// type selector
// id selector
// class

console.log("================================================================");

// Universal or global selector = *

let element = document.querySelector("*");
console.log(element);

console.log("================================================================");

// type selector

let elementName = document.querySelector("h1");
console.log(elementName);

console.log("================================================================");

// id selector

let elementId = document.querySelector("#paraOne");
console.log(elementId);

console.log("================================================================");

// class

let elementClass = document.querySelector(".listItem");
console.log(elementClass);

console.log("================================================================");

// ====================  Event Handler ===============================

// On click event
let buttonEvent = document.getElementById("myButton");
function alertMessage() {
  alert("This is extra information");
}

console.log("================================================================");

let buttonEvent1 = document.getElementById("paraTwo");
function printMessage() {
  console.log("This is a test of On Click event");
}

console.log("================================================================");

let buttonEvent2 = document.getElementById("paraOne");
function mouseHoverOver() {
  console.log("This is Mouse Hover Over event");
}

// ====================  PRACTICE ===============================

// ====================  Destructuring Arrays ===============================

let myCompleteName = ["Rahul", 25, "Cycling"];
let [completname, myRealAge, hobby] = myCompleteName;
console.log(completname, myRealAge, hobby);

console.log("================================================================");

const names = "alice";
const num = 1;

function greeting(name, num) {
  // Capitalize the first letter of name
  name = name.charAt(0).toUpperCase() + name.slice(1);

  if (num === 1) {
    return "Hello " + name;
  } else {
    return "Bye " + name;
  }
}

const message = greeting(names, num);
console.log(message); // Output: "Hello Alice"
