// Evaluate and log results 
function eval(re, str) {
  // exec() result
  let result = re.exec(str);
  console.log('Result: ', result);
  
  // test result
  if (re.test(str)) {
    console.log('Test: ', `${str} MATCHES ${re.source}`);
  } else {
    console.log('Test: ', `${str} does NOT match ${re.source}`);
  }
}
