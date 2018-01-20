let re;    // Regex to evaluate
let str;   // String to match 
 
// Brackets [] - character sets 
re = /gr[ae]y/;    // Must be a or e
// str = 'gray';   // Result[0]: ['gray'] 
// str = 'grey';   // Result[0]: ['grey'] 
// str = 'gry';    // Result: null 

re = /[gf]ray/;    // Must be g or f
// str = 'gray';      // Matches 
// str = 'fray';      // Matches 
// str = 'ray';       // null 

re = /[^gf]ray/;   // Anything but g or f
// str = 'gray';      // null 
// str = 'xray';      // Matches 
re = /^[gf]ray/;   // Must start with g or f
// str = 'gray';      // matches 
// str = 'xray';      // null  

re = /[A-Z]ray/;   // Match any uppercase letter 'Xray'  
re = /[a-z]ray/;   // Match any lowercase letter 'gray'   
re = /[A-Za-z]ray/; // Match any letter 'pray'  
re = /[0-9]ray/;   // Match any digit '9ray'  

// Braces {} - Quantifiers 
re = /hel{2}o/;    // Must occur exactly {m} times 'hello'
re = /hel{2,4}o/;  // Must occur between {m,n} times 'helllo'
re = /hel{2,}o/;   // Must occur at least {m} times 'helllllo'

// Parentheses () - Grouping 
re = /([0-9]x){3}/; // Match any digit w/ x repeated {m} times '3x3x3x'

str = '3x3x3x';  

// Evaluate and log results 
eval(re, str);
