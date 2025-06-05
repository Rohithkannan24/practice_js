class ListNode<T> {
    value: T;
    next?: ListNode<T> | null;
    constructor(value:T){
        this.value=value; }
}

class LinkedList<T> {
    public head: ListNode<T> | null; 
    
    constructor(value?: T) {  
        if (value !== undefined) {
            this.head = {
                value: value,
                next: null
            };
        } else {
            this.head = null;  
        }
    }
}
let nodeOne= new ListNode(8);
let nodeTwo= new ListNode(14);
let nodeThree= new ListNode(33);
nodeOne.next=nodeTwo;
nodeTwo.next=nodeThree;

let linked=new LinkedList(nodeOne);
console.log(linked);
