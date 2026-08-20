"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log("Верхний элемент:", numberStack.peek());
console.log("Размер:", numberStack.size());
console.log("Удалён:", numberStack.pop());
console.log("Верхний элемент:", numberStack.peek());
const stringStack = new Stack();
stringStack.push("Привет");
stringStack.push("Мир");
console.log("Строковый стек:", stringStack);
const userStack = new Stack();
userStack.push({
    name: "Анна",
    age: 25
});
userStack.push({
    name: "Иван",
    age: 30
});
console.log("Верхний пользователь:", userStack.peek());
