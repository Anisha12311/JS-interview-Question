function hasBalancedParentheses(expression){
    
   const stack = [];
   for(let i = 0; i < expression.length; i ++){
    let char = expression[i]

    if(char === '(' || char === '{' || char==='['){
        stack.push(char)
    }
    else if(char === ')' || char === '}' || char === ']'){
        if(stack.length === 0) return false
        const top = stack.pop()

        if((top === '(' && char !== ')') || (top === '{' && char !== '}') || (top === '[' && char!== ']')) return false
    }
   }
    return stack.length === 0
}



// Examples
const expression1 = "{(a+b)*(c-d)}";
const expression2 = "[(a+b) + {(c-d)*2}]";
const expression3 = "[(a+b) + {(c-d)*2]";
console.log(hasBalancedParentheses(expression1)); // Output: true
console.log(hasBalancedParentheses(expression2)); // Output: true
console.log(hasBalancedParentheses(expression3)); // Output: false