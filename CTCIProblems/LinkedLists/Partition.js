class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
  }
}

function partition(list){
    let beforeStart = null;
    let beforeEnd = null;
    let afterStart = null;
    let afterEnd = null;

    let current = list.head;
    while (current){
        if (current.data < x){
            if (beforeStart === null) {
                beforeStart = current;
                beforeEnd = beforeStart
            } else {
                beforeEnd.next = current;
                beforeEnd = curent
            }
        } else {
            if (afterStart === null) {
                afterStart = current;
                afterEnd = afterStart
            } else {
                afterEnd.next = current;
                afterEnd = curent
            }
        }
        current = current.next
    }

    if (beforeStart === null) {
        return afterStart
    }

    beforeEnd.next = afterStart;
    return beforeStart;
}


/*
Non Stable solution

function partition(list){
    let head = list.head;
    let tail = list.head;

    let current = list.head;
    while (current){
        if (current.data < x){
            current.next = head
            head = current 
        } else {
            tail.next = current
            tail = current
        }
        current = current.next
    }
    tail.next = null;
    return head;
}
*/