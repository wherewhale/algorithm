/* Function으로 구현한 Stack */

const pushStack = (stack, value) => {
  stack.push(value);
};

const popStack = (stack) => {
  return stack.pop();
};

const peekStack = (stack) => {
  return stack[stack.length - 1];
};

const isEmptyStack = (stack) => {
  return stack.length === 0;
};

const stack = [];

pushStack(stack, 1);
pushStack(stack, 2);
pushStack(stack, 3);
console.log(popStack(stack)); // 3
console.log(peekStack(stack)); // 2
console.log(isEmptyStack(stack)); // false
