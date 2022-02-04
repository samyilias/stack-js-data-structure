class stack {
  constructor() {
    this.top = -1;
    this.data = {};
  }
  push(value) {
    this.top++;
    this.data[this.top] = value;
  }
  pop() {
    if (this.top > -1) {
      delete this.data[this.top];
      this.top--;
    } else {
      throw new TypeError("there no items to delete from the stack");
    }
  }
  peek() {
    if (this.top > -1) {
      return this.data[this.top];
    } else {
      throw new Error("cant peek on an empty stack");
    }
  }
}

export default stack;

