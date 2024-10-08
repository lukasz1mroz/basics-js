// // ---------------------------------------------------
// // First class functions, higher order functions, callback functions,
// // dynamic types, declarative / imperative programming

// const test = function (test1input) {
//   return console.log('test: ', test1input);
// }

// const test2 = function (test2input, callback) {
//   console.log('test2: ', test2input);
//   const test1input = 'test2'
//   return callback(test1input);
// }

// test2('test2inputVar', test);
// test2(2, test);

// const testArr = [1, 2, 3, 4, 5];

// for (let i = 0; i < testArr.length; i++) {
//   if(testArr[i] === 2) console.log('testArr 2: ', 2)
// }

// testArr.filter((elem) => elem === 2)

// // --------------------------------------------------
// // Variables, scope, globals

// var testVar = 'testVar';
// let testLet = 'testLet'
// const testConst = 'testConst'

// var someNum = 2

// function testFunc() {
//   if(someNum === 2) {
//     var testVar = 'otherTestVar'
//     let testLet = 'otherTestlet'
//     testConst = 'otherTestconst'
//   }
// }

// let globVar = 'glob var'
// global.globalVar = globVar
// console.log(global.globalVar)
// console.log(window.globalVar)

// testFunc()
// console.log('testVarLetConst: ', testVar, testLet, testConst)

// console.log('beforeinit: ', beforeinit, beforeinitlet)
// var beforeinit
// let beforeinitlet
// const beforeTestconst

// // ---------------------------------------------------
// // Desctructuring, spread rest operators

// const otherTestarr = [1, 2, 3, 4, 5]
// const testObj = {a: 1, b: 2}
// const [firstEl] = otherTestarr
// console.log('firstel: ', firstEl)

// const otherTestarrSpread = [...otherTestarr, 6, 7]
// const otherTestobjSpread = {...testObj}
// const testFuncRest = (...args) => console.log('args: ', args)

// console.log('spread: ', otherTestarrSpread, otherTestobjSpread)
// testFuncRest(otherTestarr)

// // ---------------------------------------------------
// // Values, operators and expressions

// let testVar = 2;
// let testVar2 = (testVar **= 2);
// let testObj = {};
// const arrToSpread = [1, 2, 3, 4, 5, 6];
// testObj['test'] = [1, 2];
// let x, y;
// let a = 6;
// let b = 33;
// y = x = 'test';
// console.log(a % 3);
// console.log((a | b).toString(2));
// console.log((a << 1).toString(2));
// console.log((~a).toString(2));
// console.log(a.toString(2));
// console.log(typeof a);
// console.log(1 == '1');
// console.log(1 === '1');
// console.log(1 > '1');
// console.log(1 > true);
// console.log(1 > (undefined || null));
// console.log(1 > undefined || null);

// // ---------------------------------------------------
// // Data types, creation

// let undefinedVar;
// let nullVar = null;
// console.log('undefined, null: ', undefinedVar, nullVar)

// let a = 10;
// let b = a;
// b = 20
// console.log('ab: ', a, b)

// let obja = {a: 1}
// let objb = obja
// objb.a = 2
// console.log('objab: ', obja, objb)

// const obj1 = {a: 1} // Simple, not 4 many instances
// const obj2 = new Object() // Useful for dynamic, verbose
// obj2.a = 2
// const obj3 = Object.create(obj2) // Use prototype, less intuitive
// class NewObjClass { // Simple, less performant, no inherit
//   constructor(key1) {
//     this.key1 = key1
//   }
// }
// const obj4 = new NewObjClass('test') // Good for OOP vals, verbose
// const createObj = (key1) => ({key1: key1})
// const obj5 = createObj('test')
// const jsonStr = '{"key": "val"}'
// const obj6 = JSON.parse(jsonStr)

// console.log(parseInt('101', 2))
// console.log(parseInt('101', 10))
// const number = 101
// console.log(number.toString(2))
// console.log(number.toString(10))

// // ---------------------------------------------------
// // String

// const stringA = new String('String object');
// const stringB = 'String B';
// const stringC = 'String C';
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

// // ---------------------------------------------------
// // Number

// const num = Number('2');
// const num2 = Number(1.23);
// const num3 = Number(null);
// const num4 = parseInt('0010');
// console.log(num4);

// // ---------------------------------------------------
// // Date

// const [month, day] = [new Date().getMonth(), new Date().getDay()];
// const elapsed = Date.now() - 180000;
// console.log(new Date().toISOString());
// console.log(new Date(2021, 11, 1));
// console.log(month, day);
// console.log(new Date(elapsed));

// // ---------------------------------------------------
// // Array - list like objects with trav/mut methods

// const testArr = [
//   ['one', 1],
//   ['two', 2],
//   ['two', 2],
//   ['three', 3],
// ];
// const testMap = new Map(testArr);
// const flatMappedArr = testArr.flatMap((elem) => typeof elem[0] === 'string' && elem);
// const testSet = new Set(testArr);
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

// // ----------------------------------------------
// // Falsy & error handling
// const bool = [false, undefined, null, 0, NaN, ""].includes(true) ? true : false
// if(!bool) throw new Error()

// async function handlePromise() {
//   try {
//     const prom = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         bool ? resolve('success') : reject('error')
//       }, 1000)
//     })
//     // .then(() => console.log('done')).catch(err => console.log('promise-err: ', err))
//     const result = await prom
//   } catch (e) { // catches sync errors only and await
//     console.log('caught error: ', e)
//     throw new Error(e)
//   } finally {
//     console.log('promise result')
//   }
// }

// handlePromise()

// // ----------------------------------------------
// // Iterations, iterables, iterators, generators

// const testobj = { a: 1, b: 2, c: 3 };
// const testarr = [1, 2, 3, 4];

// Property names of objects
// for (const prop in testobj) {
//   if (prop === 'a') continue;
//   if (prop === 'c') break;
//   console.log(`${prop}: ${testobj[prop]}`);
// }

// for(const prop in testarr) {
//     console.log(`${prop}: ${testarr[prop]}`)
// }

// Property values of iterables
// for(const [k, v] of Object.entries(testobj)) {
//     console.log('kv: ', k, v)
// }

// const fibIterator = fibonacci[Symbol.iterator]();
// console.log(fibIterator.next().value);
// console.log(fibIterator.next().value);
// console.log(fibIterator.next().value);

// const makeRangeIterator = (start = 0, end = Infinity, step = 1) => {
//   let nextIndex = start;
//   let iterationCount = 0;

//   const rangeIterator = {
//     next() {
//       let result;
//       if (nextIndex < end) {
//         result = { value: nextIndex, done: false };
//         nextIndex += step;
//         iterationCount++;
//         return result;
//       }
//       return { value: iterationCount, done: true };
//     },
//   };
//   return rangeIterator;
// };

// const iter = makeRangeIterator(1, 10, 2);
// let result = iter.next();
// while (!result.done) {
//   console.log(result.value);
//   result = iter.next();
// }

// function* generatorFunc(start = 0, end = Infinity, step = 1) {
//   let iterationCount = 0;

//   for (let i = start; i < end; i += step) {
//     iterationCount++;
//     yield i;
//   }

//   return iterationCount;
// }

// const gen = generatorFunc(1, 10, 2);

// console.log('Iterated over serquence: ', result.value);
// console.log('generator: ', gen.next());
// console.log('generator: ', gen.next());
// console.log('generator: ', gen.next());
// console.log('generator: ', gen.next());
// console.log('generator: ', gen.next());
// console.log('generator: ', gen.next());

// Iterable objects - arrs, strs, maps, sets, nodelists

// const testIterable = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//   },
// };

// console.log(typeof testIterable[Symbol.iterator]);

// const fibonacci = {
//   *[Symbol.iterator]() {
//     let [prev, curr] = [0, 1];
//     while (true) {
//       yield curr;
//       [prev, curr] = [curr, prev + curr];
//     }
//   },
// };

// const obj = { a: 1, b: 2, c: 3 };
// function* objGenerator(obj) {
//   for (key of Object.keys(obj)) {
//     yield [key, obj[key]];
//   }
// }

// const objGen = objGenerator(obj);
// for (let [key, objKey] of objGen) {
//   console.log('obj: ', key, objKey);
// }

// // ----------------------------------------------
// // Objects, classes, OOP

// function Animal() {
//   this.type = 'default';
//   this.display = function () {
//     return console.log(this.type);
//   };
// }
// Animal.prototype.lifespan = 40;

// const animal2proto = {
//   type: 'default',
//   name: '2protoname',
//   display: function () {
//     return console.log(this.type);
//   },
//   get getName() {
//     return this.name;
//   },
//   set setName(name) {
//     this.name = name;
//   },
// };

// class AnimalClass {
//   constructor(name) {
//     this.name = name;
//   }
//   display() {
//     console.log(this.name);
//   }
//   get getName() {
//     return this.name;
//   }
//   set setName(name) {
//     this.name = name;
//   }
// }

// const animal = new Animal();
// const animal2 = Object.create(animal2proto);
// const animal3 = new AnimalClass('howie');
// animal.display(), animal2.display(), animal3.display();
// console.log(
//   'ownProps: ',
//   Object.getOwnPropertyNames(animal),
//   Object.getOwnPropertyNames(animal2),
//   Object.getOwnPropertyNames(animal3),
// );
// console.log(
//   'objs: ',
//   Object.getPrototypeOf(animal),
//   Object.getPrototypeOf(animal2),
//   Object.getPrototypeOf(animal3),
//   Object.getOwnPropertyNames(AnimalClass.prototype),
// );
// console.log(animal3.getName);
// animal3.setName = 'bards';
// console.log(animal3.getName);

// for (prop in animal) {
//   console.log(`${prop}: ${animal[prop]}`);
// }

// const MyClass = class {
//   constructor(test1) {
//     this.test1 = test1;
//   }
// };

// const testClass = new MyClass('name');

// // ----------------------------------------------
// // Callback, promise, async

// const callbackWrap = function(callback) {
//     console.log('callbackWrap')
//     return callback()
// }

// const callbackIn = function() {
//     return console.log('callbackIn')
// }

// callbackWrap(callbackIn)

// const promise = new Promise((res, rej) => {
//     console.log('promise')
//     res()
// })

// promise.then(() => console.log('chained'))

// Bind (always with one this) call (items) apply (array)
// Arrow function - can't bind call, only use global
// Super - binding this in derived class
// Map - KVP struct (key any value, size prop, entry order, iterable, fast, no serialize)
