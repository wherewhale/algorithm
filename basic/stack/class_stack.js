/* Class 형태로 Stack 구현 */

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }
  //push는 배열의 맨 뒤에 요소를 추가

  pop() {
    return this.stack.pop();
  }
  //pop은 배열의 맨 뒤에 요소를 제거

  peek() {
    return this.stack[this.stack.length - 1];
  }
  //peek은 배열의 맨 뒤에 요소를 읽음 (스택 변경 없음)

  isEmpty() {
    return this.stack.length === 0;
  }
  //스택이 비어있는지 확인
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
