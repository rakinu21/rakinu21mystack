export default class stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }
    overflow() {
        if (this.items.length >=10) {
            return true;
        } else {

            return false;
        }
    }
    underflow() {
        if (this.items.length <= 0) {
            return true;
        } else {
            return false;
        }
    }

    push(addToTheStack) { //this function for push to stack

        this.items[this.size] = addToTheStack;
        this.size += 1;
    }
    pop() { // this function for the pop of the  stack


        let DeleteItems = this.items[this.size - 1];
        this.items.pop();
        this.size -= 1;
        return DeleteItems;
    };
    display() { // for the display of the stack

        return this.items;
    }
    empty() {
        if (this.items.length == 0) {
            return "Stack is empty"
        } else {
            return " stack is not empty"
        }

    }
}