class QElement {
    constructor(value, priority){
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor(){
        this.queue = []
    }

    enqueue(value, priority){
        let contain = false
        let element = new QElement(value, priority)
        for (let i = 0; i < this.queue.length; i++){
            if (this.queue[i].priority > element.priority){
                contain = true
                this.queue.splice(i, 0, element)
                break
            }
        }

        if (!contain){
            this.queue.push(element)
        }
    }

    dequeue(){
        return this.queue.pop();
    }

    peek(){
        return this.queue[queue.length-1]
    }

}

var priorityQueue = new PriorityQueue(); 
// adding elements to the queue 
priorityQueue.enqueue("Sumit", 2); 
priorityQueue.enqueue("Gourav", 1); 
priorityQueue.enqueue("Piyush", 1); 
priorityQueue.enqueue("Sunny", 2); 
priorityQueue.enqueue("Sheru", 3);
console.log(priorityQueue.queue); 