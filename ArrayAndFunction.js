
function Max(a,b){
    return (a>b)?a:b;
}

console.log(Max(2,6));


//excludess
// let numb =[12,13,114];
//  function except(number,excludeNum){
//    const final=[];
//    for(let element of number)
//       if(!excluded.includes(element))
//          final.push(element);
//    return final;   
//  }

//  const exceptFinal = except(numb,[12]);
//  console.log(exceptFinal);


//count of an element
let countNum =[1,2,3,4,1,1,5,6,9,1,1,1,1,1,1,1];

function numCount(array,searchElement){
    let res=0;
    for(let element of array)
        if(element===searchElement)
            res++;
    return res;    
}

const finalCount=numCount(countNum,1);
console.log(finalCount);

//largest number

 const largeNum = [2,3,4,5,23,2,1,23,43,12,6,45];

 function getMax(array){
    if(array.length===0) return undefined;

    let Max=array[0];

    for (let i=1;i<array.length;i++)
        if (array[i]>Max)
            Max=array[i];
    return Max;    
 }

 const maxNum = getMax(largeNum);  
 console.log(maxNum);

 // sum of an argument
 function sum(...items){
    if(items.length===1 && Array.isArray(items[0]))
       items=[...items[0]];
    return items.reduce((a,b)=>a+b);    
 }


 arraySum=[1,2,3,4];
 console.log(sum(arraySum));

 //area of Circle
 const Circle={
    radius: 1,
    get area(){
        return Math.PI*this.radius*this.radius;
    }
 };
 console.log(Circle.area);
