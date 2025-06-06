class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(value: T): void {
        this.items.push(value);
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
           console.log("Value deleted")
        }
        return this.items.shift();
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    //reverse string

    reverse(): void {
        const stack: T[] = [];
        
       
        while (!this.isEmpty()) {
            stack.push(this.dequeue()!); 
        }
        
        
        while (stack.length > 0) {
            this.enqueue(stack.pop()!); 
        }
    }   
    
   
}
