/* class를 이용한 queue 구현 */
class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(item) {
    this.arr.push(value);
    //push는 배열의 맨 뒤에 요소를 추가
  }
  dequeue() {
    return this.arr.shift();
    //shift는 배열의 맨 앞에 요소를 제거
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
