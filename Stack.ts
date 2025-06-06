class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        if(this.isEmpty()){
            console.log("Stack is empty");
        }
        return this.items.pop();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

     toArray(): T[] {
        return [...this['items']]; 
    }

    reverseString(name: string): string {
        
        this.items = [];
        
        
        for (const char of name) {
            this.push(char as T); 
        }
        
    
        let reversed = '';
        while (!this.isEmpty()) {
            reversed += this.pop();
        }
        
        return reversed;
    }
    //balanced expression
      balancedExe(expression: string): boolean {
        const brackets: {[key:string]:string} = {
            ')': '(',
            ']': '[',
            '}': '{',
            '>': '<'
        };

        for (const char of expression) {
            if ("([{<".indexOf(char) !== -1) {
              this.push(char as T);
            } 
            else if (char in brackets) {
               if (this.isEmpty() || this.pop() !== brackets[char]) {
            return false;
            }
            }
        }

        return this.isEmpty();
    }
}

const stack = new Stack<string>();
const original = "Rohithan";
const reversed = stack.reverseString(original);

console.log("Original:", original);
console.log("Reversed:", reversed);

const express= stack.balancedExe("(1+2)");
console.log(express);
const expres= stack.balancedExe("(1+2");
console.log(expres);
