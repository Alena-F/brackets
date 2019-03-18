module.exports = function check(str, bracketsConfig) {
  
  if (str.length%2 !== 0) {
    return false
  }

  let opens = [];
  let closers = [];
  for( let j=0; j<bracketsConfig.length; j++){
    opens.push(bracketsConfig[j][0]);
    closers.push(bracketsConfig[j][1])
  }

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if(opens.indexOf(str[i]) !== -1) { 
      if (opens.indexOf(str[i])===closers.indexOf(str[i]) && str[i] === stack[stack.length-1]) {
        stack.pop(); 
      } else {
        stack.push(str[i]);
      }
    } 
    else if (closers.indexOf(str[i]) !== -1 && closers.indexOf(str[i]) === opens.indexOf(stack[stack.length-1])) {
        stack.pop();
      } 
      else {
        return false;
      }
    }

  if (stack.length > 0) return false;
   
  return true
}

