module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) return false;
  const bracketPairs = Object.fromEntries(bracketsConfig);
  let openBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i++){
    openBrackets.push(bracketsConfig[i][0]); 
  }
  let stack = [];   
  for (let bracket = 0; bracket < str.length; bracket++){
    if (openBrackets.includes(str[bracket])) {
      if (str[bracket] === bracketPairs[str[bracket]]) {
        if (stack[stack.length - 1] === str[bracket]){
          stack.pop();
          continue;
        }
      }
      stack.push(str[bracket]);
      continue;
    }
    if (str[bracket] === bracketPairs[stack[stack.length - 1]]) {
      stack.pop();
    }     
  }  
  return stack.length === 0;  
}



