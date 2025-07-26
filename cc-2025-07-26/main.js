class MyQueue{
    constructor(){
        this.queue = [];
    }
    push(val){
        this.queue.push(val);
    }
    pop(){
        return this.queue.shift();
    }
    peek(){
        return this.queue[0];
    }
    empty(){
        return this.queue.length === 0;
    }
}