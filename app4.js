let re;    // Regex to evaluate
let str;   // String to match 
 
// Shorthand character classes  
re = /\w/;   // word character - alphanumeric or _
re = /\w+/;   // match any word char one or more times
re = /\W/;   // non-word character 
re = /\d/;   // any digit  
re = /\d+/;   // any digit 0 or more times
re = /\D/;  // non-digit 
re = /\s/;  // match whitespace char
re = /\S/;  // match non-whitespace char
re = /Hell\b/;  // word boundary "Hell" not "Hello"

// Assertions 
re = /x(?=y)/;   // match x only if followed by y 
// str = 'galaxy' // matches 
re = /x(?!y)/;   // match x only if NOT followed by y 
// str = 'taxes'; // matches  

// Evaluate and log results 
eval(re, str);
