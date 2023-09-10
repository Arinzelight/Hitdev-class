/* ========== FUNCTION TO REVERSE AN ARRAY ============ */

function reverseArray(arr){

    let reversedArr = [];

    for(let i = arr.length-1; i>=0; i--){

        reversedArr.push(arr[i])
    }

    return reversedArr
}


const myArray = [1, 2, 3, 4, 5, 6];
const myReversedArray = reverseArray(myArray)

console.log(myReversedArray);


/* ========== FUNCTION TO SORT AN ARRAY ============ */

function sortArray(arr){

    let swapped;

    do{
        swapped = false
        for(let i = 0; i <= arr.length; i++){
            if(arr[i] > arr[i + 1]){

                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i +1] = temp
                swapped = true
            }
        }


    }while (swapped);

    return arr;
}

const originalArry = [8, 3, 9, 4, 2, 1, 7];

const sortedArray = sortArray(originalArry)
console.log(sortedArray)







/* =========== IMPLEMENTING STACK IN JAVASCRIPT ========== */

class Stack{

    constructor(){
        this.items = [];
    }

    //push function to add an item to the stack

    push(item){
        this.items.push(item);
    }

    // pop function to remove and return the top(last added item)

    pop(){
        if(this.items.length === 0)
            return "Stack is empty";
        
        return this.items.pop();
    }

    // peek function to return the top item (last added item) without removing it

    peek(){
        if (this.items.length === 0)
            return "Stack is empty";

        return this.items[this.items.length -1];  
    }

    // function to check if stack is empty

    isEmpty(){
        return this.items.length === 0;
    }

    // function that returns the size of the stack

    size(){
        return this.items.length;
    }

    // function to clear the stack

    clear(){
        return this.items = [];
    }



}

// Create an instance of the "Stack" class and store it in the variable "stack."
const stack = new Stack();

stack.push(10);
stack.push(20)
stack.push(30)
stack.push(40)
console.log(stack.peek())
console.log(stack.items)
stack.pop()
console.log(stack.items)
console.log(stack.isEmpty())







/* =========== IMPLEMENTING STACK IN JAVASCRIPT ========== */

class Queue {
    constructor() {
      // Initialize an empty object to represent the queue
      this.items = {};
      // Initialize front and rear pointers
      this.front = 0;
      this.rear = 0;
    }
  
    // Add an element to the rear of the queue
    enqueue(element) {
      this.items[this.rear] = element;
      this.rear++;
    }
  
    // Remove and return the element from the front (last item) of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
  
      const frontElement = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return frontElement;
    }
  
    // Return the front element of the queue without removing it
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
  
      return this.items[this.front];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.front === this.rear;
    }
  
    // Return the size of the queue
    size() {
      return this.rear - this.front;
    }
  
    // Clear the queue
    clear() {
      this.items = {};
      this.front = 0;
      this.rear = 0;
    }
  }
  
  // Example usage:
  const queue = new Queue();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  
  console.log(queue.peek()); 
  console.log(queue.dequeue()); 
  console.log(queue.size()); 
  
  queue.clear();
  console.log(queue.isEmpty()); 
  

