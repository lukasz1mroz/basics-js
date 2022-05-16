//---------------------------------------------------
// ES / Node modules

import { adder } from './testFunc.js';

//---------------------------------------------------
// Values, operators and expressions

let testVar = 2;
let testVar2 = (testVar **= 2);
let testObj = {};
const arrToSpread = [1, 2, 3, 4, 5, 6];
testObj['test'] = [1, 2];
let x, y;
let a = 6;
let b = 33;
y = x = 'test';
// console.log(testObj);
// console.log(y);
// console.log(a === b);
// console.log(a % 3);
// console.log((a | b).toString(2));
// console.log((a << 1).toString(2));
// console.log((~a).toString(2));
// console.log(a.toString(2));
// console.log(typeof a);
// console.log(testObj instanceof Object);
// console.log(1 in testObj['test']);
// Include some object in list (ex args)
// Rest - unpack list ingo obj
// console.log(...arrToSpread);

//---------------------------------------------------
// Var (global scope), let, const (reassigned)

const varLetConstFunc = () => {
  let letOne = 'value letOne';
  const constOne = 'value constOne';
  console.log('varLetConstFunc: ', letOne);
};

// varLetConstFunc();
// console.log(varOne);
// console.log(letOne);
// console.log(constOne);
// Hoisted to the top as undefined
var varOne = 'value varOne';
varOne = 'updated value varOne';

//---------------------------------------------------
// Scope, this, closure

// Reurn global or bound scope, undefined in strict
// Closure - function with surrounding scope
const test = {
  value: 'abc',
  value2: 'def',
  func: function () {
    return this.value;
  },
};

// Bind (always with one this) call (items) apply (array)
function adder2(a, b) {
  return a + b + this.value + this.value2;
}
const adder3 = adder2.bind(test);

// Arrow function - can't bind call, only use global
const arrowFunc = () => this;

// Class is a function with methods as props
// Super - binding this in derived class
class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  first() {}
  second() {}
}

// console.log(arrowFunc.bind('a')());
// console.log(adder2.call(test, 'ghi', 'jkl'));
// console.log(adder2.apply(test, ['ghi', 'jkl']));
// console.log(adder3('ghi', 'jkl'));
// console.log(test.func());
// new Example();
// console.log(this === window);

//---------------------------------------------------
// String

const stringA = new String('String object');
const stringB = 'String B';
const stringC = 'String C';
// console.log(stringB.charCodeAt(1));
// console.log(stringB < stringC);
// console.log(stringB.concat(stringC));
// console.log(stringB.includes('B'));
// console.log(stringB.indexOf('B'));
// console.log(stringB.match(/\w+/g));
// console.log(stringB.replace(/\w+/g, '-'));
// console.log(stringB.slice(-8));
// console.log(stringB.split(' '));
// console.log(stringB.substring(2));

//---------------------------------------------------
// Number

const num = Number('2');
const num2 = Number(1.23);
const num3 = Number(null);
const num4 = parseInt('0010');
// console.log(num4);

//---------------------------------------------------
// Date

const [month, day] = [new Date().getMonth(), new Date().getDay()];
const elapsed = Date.now() - 180000;
// console.log(new Date().toISOString());
// console.log(new Date(2021, 11, 1));
// console.log(month, day);
// console.log(new Date(elapsed));

//---------------------------------------------------
// Array - list like objects with trav/mut methods

const testArr = [
  ['one', 1],
  ['two', 2],
  ['two', 2],
  ['three', 3],
];
const testMap = new Map(testArr);
const flatMappedArr = testArr.flatMap((elem) => typeof elem[0] === 'string' && elem);
const testSet = new Set(testArr);
// testArr.push('four');
// testArr.shift();
// console.log(testArr);
// console.log(testArr.indexOf('two'));
// console.log(testArr.splice(0, 1));
// Regural expressions objects to match patterns in strings
// console.log('one two three'.match(/\w+/g));
// console.log(testArr2);
// console.log(testArr.at(-1));
// console.log(testArr.concat(testArr));
// console.log(flatMappedArr);

//---------------------------------------------------
// Map - KVP struct (key any value, size prop, entry order, iterable, fast, no serialize)

// console.log(testMap.entries());

//---------------------------------------------------
// NodeList - DOM elems

const nodeList = document.getElementById('sampleNode');
// console.log(nodeList.childNodes);

//---------------------------------------------------
// Object

const testObj2 = Object({ name: 'Lukasz', weight: 82 });
// console.log(Object.getPrototypeOf(testObj2));

//---------------------------------------------------
// Math - built-in JS objects with methods

//console.log(Math.abs(-2));
// console.log(Math.floor(-2.12));
// console.log(Math.pow(2, 4));
// console.log(parseInt(Math.random() * (10 - 1) + 1));

//---------------------------------------------------
// Function - like procedure, set of statements with result
// First class objects - treated like other variables, pure - no side effects, hoisted
const testFunc2 = (a, b) => a + b;
const testFunc3 = (a) => (b) => a + b;
// Higher order and callback function with closure and object destructuring
const testObj3 = {
  a: 1,
  b: 2,
  c: { ca: 3 },
  e(func) {
    let { ca: d } = this.c;
    func(this.a, this.b, d);
  },
};
//testObj3.e(console.log);
// Math props, currying, composition
// console.log(testFunc2(testFunc2(1, 2), 3) === testFunc2(3, testFunc2(1, 2)));
// console.log(testFunc2(1, 2) === testFunc2(2, 1));
// console.log(testFunc2(1, 0) === 1);
// console.log(testFunc3(3)(4));

//---------------------------------------------------
// OOL
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Expression (assignment) vs declaration (class isn't hoisted), class is strict
class NextPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Private and static fields, getter
  static type = 'human';
  #legsNum = 2;

  get introduction() {
    return this.introduction;
  }

  set legs(num) {
    num === 1 ? this.#legsNum && console.log(this.#legsNum) : console.log('Wrong legs num, old:', this.#legsNum);
  }

  introduction() {
    return `I'm ${this.name} with ${this.#legsNum} legs`;
  }
}

class European extends NextPerson {
  constructor(name) {
    super(name);
  }

  #legsNum = 3;

  introduction() {
    return `I'm ${this.name} with ${this.#legsNum * 2} legs`;
  }
}
const lukasz = new Person('Lukasz', 32);
const lukasz2 = Object.create(lukasz);
const marta = new NextPerson('Marta', 31);
const marta2 = new European('Marta', 31);
// console.log(Object.getOwnPropertyNames(lukasz2));
// console.log(marta2.introduction());
// marta.legs = 1;

//---------------------------------------------------
// Async
// Callback, promise, async

const printString = (input) => {
  setTimeout(console.log(input), Math.floor(Math.random() * 100) + 1);
};

const printStringCb = (input, callback) => {
  setTimeout(() => {
    console.log(input), callback();
  }, Math.floor(Math.random() * 100) + 1);
};

const printStringPr = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(input);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
};

const printAllCb = () => {
  printStringCb('A', () => {
    printStringCb('B', () => {});
  });
};

const printAllPr = () => {
  printStringPr('A').then(() => printStringPr('B'));
};

const printAllAsync = async () => {
  await printString('A');
  await printString('B');
};

// printAllCb();
// printAllPr();
// printAllAsync();

//---------------------------------------------------
// ES5,6,7,8,9,12
// 5,6- strict, arrows, template, let const, class, promise
// 7,8- includes, async
// 9,12- rest, replace, any, await
// 2022- at, await

//---------------------------------------------------
// Typescript

//---------------------------------------------------
// Node

//---------------------------------------------------
// React
