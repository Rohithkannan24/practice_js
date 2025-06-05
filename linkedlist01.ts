class node<T>{
    value:T;
    next: node<T>|null;
    constructor(value:T){
        this.value=value;
        this.next=null;
    }
}

 class linkedlist<T>{
    private head:node<T>|null;
    private tail:node<T>|null;

    constructor(head:T){
        if(head!==undefined){
        this.head={value:head,next:null};
        this.tail=this.head;
        }  
        else{
            this.head=null;
            this.tail=null;
        }
    }
//add the element in last---
    addlast(value:T):void{
        const addnode= new node(value);
        if(!this.head){
            this.head=addnode;
            this.tail=addnode;
        }
        else{
            this.tail!.next=addnode;
            this.tail=addnode;
        }
    }
// add the element in first----
    addfirst(value:T){
        const addnode = new node(value);
        if(!this.head){
            this.head=this.tail=addnode;
        }
        else{
            addnode.next=this.head;
            this.head=addnode;
        }
    } 
// find the index 
    indexOf(value:T):number|string{
        let Current: node<T> | null=this.head;
        let index=0;
        while(Current!==null){
            if(Current.value===value){
                return index;
            }
           Current=Current.next;
            index++;
        }
        return "value not found";

    }
//check value inside or not---
    contains(value:T):string{
        let Current:node<T>|null=this.head;
        while(Current){
            if(Current.value===value){
                return "value in";
            }
            Current=Current.next;
        }
        return "value not in the list";
    }
//delete the first element---
    removeFirst():T|undefined{
        if(!this.head){
            return undefined;
        }
        const Value=this.head.value;
        this.head=this.head.next;
        if(!this.head){
            this.tail=null;
        }
        return Value;

        }
//delete the last element---
    removeLast():T|undefined{
        if(!this.tail){
            return undefined;
        }
        if(this.head===this.tail){
            return this.removeFirst();
        }
        let Current:node<T>|null=this.head;
        while(Current&&Current.next!==this.tail){
            Current=Current.next;
        }
        if (!Current || !Current.next) {
        return undefined;
        }
        const Value=this.tail.value;
        this.tail=Current;
        this.tail.next=null;
        return Value;

    }
//linkedlist into array
    toArray():T[]{
        const array:T[]=[];
        let Current=this.head;
        while(Current){
            array.push(Current.value);
            Current=Current.next;
        }
        return array;
    }
// reserve the linkedlist
   /* reverse():void{
        let previous=this.head;
        let Current= this.head.next;
        while(Current!==null){
            const next= Current.next;
            Current.next=previous;
            previous= Current;
            Current= next;
        }
        this.tail=this.head;
        this.tail.next=null;
        this.head=previous;
    }*/

    reverse(): void {
    let previous = null;          
    let current = this.head;      
    this.tail = this.head;        

    while (current !== null) {
        const next = current.next;  
        current.next = previous;   
        previous = current;        
        current = next;            
    }

    this.head = previous;         
    }
// find the Kth Node from the end
    /*getkth(K:number):T{
        let a: node<T> | null=this.head;
        let b: node<T> | null=this.head;
        for(let i=0;i<K-1;i++){
            b=b.next;
        }
        while(b!==this.tail){
            a=a.next;
            b=b.next;
        }
        return a.value;
    }*/

    /*getkth(K: number): T{
        if (K <= 0 || !this.head) {
           return "Invalid K or empty list";
        }

        let a: node<T> | null = this.head;
        let b: node<T> | null = this.head;
    
    // Move b ahead by K-1 nodes
        for (let i = 0; i < K - 1; i++) {
            if (!b.next) {
              return "List is shorter than K";
            }
            b = b.next;
        }
    
    // Move both until b reaches the tail
        while (b !== this.tail) {
            if (!a.next || !b.next) {
              return "Unexpected end of list";
            }
            a = a.next;
            b = b.next;
        }
    
        if (!a) {
           return "Node not found";
        }
        return a.value;
    }*/
    getkth(K: number): T | string | undefined {
    if (K < 0){ return "Invalid K (must be positive)"};
    if (!this.head) {return "List is empty"};
    
    let a: node<T> | null = this.head;
    let b: node<T> | null = this.head;
    
    
    for (let i = 0; i < K; i++) {
        if (!a){ return "list is not that much length"};
        a = a.next;
    }
    
  
    while (a?.next) {
        a = a.next;
        if (!b) return "Unexpected null in list";
        b = b.next;
    }
    
    return b?.value;
}

// find the middle node from the linkedlist
    printMiddleNode(): void {
        if (!this.head) {
            throw new Error("List is empty");
        }

        let slow: node<T> | null = this.head;
        let fast: node<T>  | null = this.head;

        while (fast && fast.next && fast.next.next) {
            slow = slow!.next;
            fast = fast.next.next;
        }

        
        if (!fast.next) {
            console.log("Middle node:", slow!.value);
        } else if (!fast.next.next) {
            console.log("Middle nodes:", slow!.value, "and", slow!.next!.value);
        }
    }

 }

const list = new linkedlist<string>("rohi");
list.addfirst("madhava");
list.addfirst("Ajay");
list.addfirst("aakash");
console.log(list);
list.addlast("madh");
list.addlast("Aj");
list.addlast("aak");
console.log(list);
list.indexOf("rohi");
list.removeFirst();
console.log(list.toArray());
console.log(list.reverse());
console.log(list.toArray());
console.log(list.getkth(3));
console.log(list.getkth(9));
console.log(list.printMiddleNode());
