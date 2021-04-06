function CircularQueue(slots) {
  this.queue = Array(slots).fill(undefined);
  this.currentSlot = 0;
  this.slots = slots;
  this.oldest = 0;
  
}

CircularQueue.prototype.enqueue = function(toAdd) {
  this.queue[this.currentSlot] = toAdd;
  let next = this.currentSlot + 1;
  this.currentSlot = next >= this.slots ? 0 : next;
  if (this.queue[this.currentSlot] !== undefined) this.oldest = this.currentSlot;
};

CircularQueue.prototype.dequeue = function() {
  if (this.queue.every(slot => slot === undefined)) return null;
  let toReturn = this.queue[this.oldest];
  this.queue[this.oldest] = undefined;
  let next = this.oldest + 1;
  if (!(this.queue.every(slot => slot === undefined))) {
    this.oldest = next >= this.slots ? 0 : next;
  }
  return toReturn;
};

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.oldest);
console.log(queue.dequeue() === 1);
console.log(queue.oldest);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.oldest);

console.log(queue.dequeue() === 2);
console.log(queue.oldest);
console.log(queue.queue);

queue.enqueue(5);
console.log(queue.queue);

queue.enqueue(6);
console.log(queue.queue);
queue.enqueue(7);
console.log(queue.queue)
console.log(queue.dequeue() === 5);
console.log(queue.queue)
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);