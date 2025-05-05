//Abstraction & Encapsulation Es6  ;;;;;;;;;;;;

class CoffeeMachine {
    brewCoffee(type) {
      this.#heatWater();
      this.#grindBeans();
      this.#extract(type);
      return `Your ${type} coffee is ready!`;
    }
  
    // All these complex steps are hidden
    #heatWater() { console.log("Heating water to 92°C..."); }
    #grindBeans() { console.log("Grinding coffee beans..."); }
    #extract(type) { console.log(`Extracting ${type} coffee...`); }
  }
  
  // Using the machine
  const machine = new CoffeeMachine();
  console.log(machine.brewCoffee("espresso")); 


  //stopwatch

  function Stopwatch() {
    let startTime,endTime,running,duration = 0;
    this.Start=function(){
        if(running)
            throw new Error ('StopWatch is already started.' );
        running=true;
        startTime=new Date();
    }  
    
    this.Stop=function(){
        if(!running)
            throw new Error('Stopwatch is not started.');
        running=false;
        endTime=new Date;
        const Seconds = endTime.getTime()- startTime.getTime()/1000;
        duration+=Seconds;
    }

    this.reset=function(){
        startTime=null;
        endTime=null;
        running=false;
        duration=0;
    }

    Object.defineProperty(this, 'duration',{
        get: function(){
            return duration;
        }
    });
  }
  
  const SW = new Stopwatch();
  console.log(SW.Start());
 console.log(SW.Stop());
  console.log(SW.duration); 
  console.log(SW.reset()); 