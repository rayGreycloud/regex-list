let re;

re = /hello/;
// re.source = 'hello';

// Flags 
re = /hello/i; // i = case-insensitive
// re = /hello/g; // g = global

// exec() - returns result array or null
let result = re.exec('hello'); // [ 'hello', index: 0, input: 'hello' ]
  // result[0] = hello
  // result.index = 0
  // result.input = hello

// test() - returns true/false 
result = re.test('hello'); // true
result = re.test('Hello'); // false 

// ! String methods w/ regex parameter
// match() - returns result array or null 
let str = 'hello world'; 
result = str.match(re); // ["hello", index: 0, input: 'hello world'] 

// search() - returns index of first match or -1
str = 'Say hello world'; 
result = str.search(re); // 4

// replace() - returns new string 
str = 'hello world';
result = str.replace(re, 'hi'); // hi world

console.log(result);