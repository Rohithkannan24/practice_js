class array<T>{
	private items:T[];
	private count:number=0;
	constructor(length:number){
		this.items= new Array<T>(length);
	}
	
	public insert(item:T):void{
		if(this.items.length==this.count){
			const newSpace= this.count*2;
			const newItems=new Array<T>(newSpace);
			
			for(let i=0; i<this.count; i++){
				newItems[i]=this.items[i];
			}
			this.items=newItems;
		}
		this.items[this.count++]=item;
	}
	
	public removeAt(index: number): T | string {
    if (index < 0 || index >= this.count) {
        throw new Error("Index out of bounds");
    }
    const removed = this.items[index];
    
    for (let i = index; i < this.count - 1; i++) {
        this.items[i] = this.items[i + 1];
    }
    
    this.count--;
    
    return "removed Value"+removed;
}
	
	
	public indexOf(item:T):number|string{
		for(let i=0; i<this.count; i++)
			if(this.items[i]===item)
				return i;
		return "this value not in the array";	
	}
	
	public print():void{
		for(let i=0;i<this.count; i++)
			console.log(this.items[i]);
	}
}
