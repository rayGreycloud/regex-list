let re;    // Regex to evaluate
let str;   // String to match 
 
// Literal characters 
re = /hello/;
re = /Hello/i;

// Metacharacters 
re = /^h/;     // must start with
re = /d$/;     // must end with

re = /h.llo/;   // wildcard for any character 1 time
// str = 'hello world'; // Result[0]: "hello"

re = /h*llo/;   // wildcard for any character 0 or more times
// str = 'hello world'; // Result[0]: "llo"
// str = 'heeeello world'; // Result[0]: "llo"
// str = 'hllo world'; // Result[0]: "hllo" 

re = /gre?a?y/;   // Optional character
// str = 'grey';  // Matches 'grey', 'gray' or 'gry'

re = /hello\?/;   // Escape character 
str = 'hello?';  // Matches ? instead metacharacter 

// Evaluate and log results 
eval(re, str);
