/* function을 이용한 queue 구현 */

const enqueue = (arr, item) => {
  arr.push(item);
  return arr;
};

const dequeue = (arr) => {
  return arr.shift();
};

const queue = [];
enqueue(queue, 1);
enqueue(queue, 2);
enqueue(queue, 3);
console.log(dequeue(queue)); // 1
console.log(queue); // [2, 3]
