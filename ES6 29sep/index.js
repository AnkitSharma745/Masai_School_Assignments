// Create a custom Array constructor which will return an array object.
// It should have a property size based on the length of arguments passed.
// Add the arguments as key(index) value pairs in the Array object.
// Use the “.prototype” property to add custom methods to the Array.
// Add following methods :-
// .push // Should add an element at the end.
// .pop() // Should remove an element from the end.
// .top() // Should return the element at the last index.
// .print() // Should print the elements in a single line (e.g. [1,2,3,4]).
// .printReverse() // Should print the elements in a single line in reverse order.
// .size // Should return the length of the stack

// CustomArray constructor
function CustomArray() {
  this.size = arguments.length;

  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
}

// Add .push method
CustomArray.prototype.push = function (element) {
  this[this.size] = element;
  this.size++;
};

// Add .pop method
CustomArray.prototype.pop = function () {
  if (this.size === 0) {
    return undefined
  }
  const removedElement = this[this.size - 1];
  delete this[this.size - 1]
  this.size--;
  return removedElement;
};

// Add .top method
CustomArray.prototype.top = function () {
  if (this.size === 0) {
    return undefined
  }
  return this[this.size - 1]
};

// Add .print method
CustomArray.prototype.print = function () {
  const elements = [];
  for (let i = 0; i < this.size; i++) {
    elements.push(this[i]);
  }
  console.log(`[${elements.join(', ')}]`);
};

// Add .printReverse method
CustomArray.prototype.printReverse = function () {
  const elements = [];
  for (let i = this.size - 1; i >= 0; i--) {
    elements.push(this[i]);
  }
  console.log(`[${elements.join(', ')}]`);
};



const customArr = new CustomArray(1, 2, 3, 4);



customArr.push(5);
customArr.print()
customArr.pop()
customArr.print()
console.log(customArr.top())
customArr.printReverse()
console.log(customArr.size); 






