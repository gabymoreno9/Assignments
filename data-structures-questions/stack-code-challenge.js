class Stack{
    constructor(){
      this.array=[],
      //this.top refers to the index of an array. 
      //I assigned the value to 0 to allow to you 
      //to push the first value to the array.
      //Then you can increment it after it pushed to the array.
    }
    
    // add push method here 
     push(element){
     // put your code here 
      return this.array.push(element)
     }
     
    // add isEmpty method here
     isEmpty(){
       return this.array.length === 0
     }
     
     // add pop method here and return the word "underflow" is the array empty
     pop(){
      return this.array.pop()
      
     }
    }
    
    let stack= new Stack();