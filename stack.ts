class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

  
    pop(): T | undefined {
        return this.items.pop();
    }

  
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }


    isEmpty(): boolean {
        return this.items.length === 0;
    }

  
    size(): number {
        return this.items.length;
    }
}


const numberStack = new Stack<number>();

numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log("Верхний элемент:", numberStack.peek());
console.log("Размер:", numberStack.size());
console.log("Удалён:", numberStack.pop());
console.log("Верхний элемент:", numberStack.peek());



const stringStack = new Stack<string>();

stringStack.push("Привет");
stringStack.push("Мир");

console.log("Строковый стек:", stringStack);


interface User {
    name: string;
    age: number;
}

const userStack = new Stack<User>();

userStack.push({
    name: "Анна",
    age: 25
});

userStack.push({
    name: "Иван",
    age: 30
});

console.log("Верхний пользователь:", userStack.peek());