import stack from './Mystackmain.js';

let MyStack = new stack();

let theResult = document.querySelector(".result");
let insert = document.querySelector(".clickPush");
let remove = document.querySelector(".clickPop");
let empty = document.querySelector(".empty")


insert.addEventListener("click", (event) => {

    if (MyStack.overflow()) {
        theResult.innerHTML = "stack overflow"
        event.preventDefault();
    } else {
        let addToTheStack = document.querySelector(".insertValue").value;
        MyStack.push(addToTheStack);
        theResult.innerHTML = MyStack.display();
    }
});
remove.addEventListener("click", (event) => {
    if (MyStack.underflow()) {
        theResult.innerHTML = "stack underflow"
        event.preventDefault();
    } else {
        MyStack.pop();
        theResult.innerHTML = MyStack.display();
    }
});
empty.addEventListener("click", () => {
    theResult.innerHTML = MyStack.empty();
    
});