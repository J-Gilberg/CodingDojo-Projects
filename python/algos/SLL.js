// singly linked lists
// ListNode class: we'll be using this

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // addToFront - adds a node with the given value to the head of the list
    addToFront(value) {
        var newNode = new ListNode(value);
        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // addToBack - adds a node with the given value to the tail of the list
    addToBack(value) {
        var newNode = new ListNode(value);
        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;  // 
            this.tail = newNode;
        }
    }

    findMinNode(){
        if (this.head == null && this.tail == null){
            return undefined;
        }
        var runner = this.head;
        var min = runner;
        while(runner.next != null){
            runner = runner.next;
            if (min.value > runner.value){
                min = runner;
            }
        }     
        if (min.value > this.tail.value){
            min = this.tail;
        }   
        return min;
    }

    findMaxNode(){
        if (this.head == null && this.tail == null){
            return undefined;
        }
        var runner = this.head;
        var max = runner;
        while(runner.next != null){
            runner = runner.next;
            if (max.value < runner.value){
                max = runner;
            }
        }     
        if (max.value < this.tail.value){
            max = this.tail;
        }   
        return max;
    }

    partition(target){
        if (this.head == null && this.tail == null){
            return undefined;
        }
        if (this.head == this.tail){
            return this
        }
        var less_than = [];
        var greater_than = [];
        var in_between = [];
        var runner = this.head;
        while(runner != null){
            if( runner.value < target){
                less_than.push(runner);
            }
            if(runner.value > target){
                greater_than.push(runner);
            }
            if(runner.value == target){
                in_between.push(runner);
            }
            runner = runner.next;
        }
        var final_array = less_than.concat(in_between, greater_than);
        this.head = final_array[0];
        this.tail = final_array[final_array.length - 1];
        for (var i = 0; i < final_array.length ; ++i){
            final_array[i].next = final_array[i+1];
        }
        this.tail.next = null;
    
        return this
    
    }

    findSecondToLast(){
        if (this.head == null || this.head == this.tail){
            return undefined;
        }
        var runner = this.head;
        while(runner.next != this.tail){
            runner = runner.next;
        }
        return runner.value;
    }

    // contains - returns true if target is in the linked list (as a node value),
    // false otherwise
    contains(target) {
        var runner = this.head;
        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    removeFront() {
        if(this.head == null && this.tail == null){
            return undefined;
        }
        if(this.head == this.tail){
            this.tail = null;
        }
        var temp = this.head;
        this.head = temp.next;
        return temp.value;
    }

    removeBack() {
        if(this.head == null && this.tail == null){
            return undefined;
        }
        var runner = this.head;
        var temp = this.tail;
        if(this.head == this.tail){
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        var runner = this.head;
        var temp = this.tail;
        while(this.tail != runner.next){
            console.log(runner.value);
            runner = runner.next;
        }
        this.tail = runner;
        runner.next = null;
        return temp.value;
    }

    moveMaxToBack(){
        if(this.head == null && this.tail == null){
            return undefined;
        }
        var temp = this.findMaxNode();
        if(temp != this.tail){
            if(temp != this.head){
                var runner = this.head;
                while(runner.next != temp){
                    runner = runner.next;
                }
                runner.next = temp.next;
            }else{
                this.head = this.head.next;
            }
            this.tail.next = temp;
            this.tail = temp;
            this.tail.next = null;
        }
        console.log(this.display())
    }   

    moveMinToFront(){
        if(this.head == null && this.tail == null){
            return undefined;
        }
        var temp = this.findMinNode();
        if(temp != this.head){
            var runner = this.head;
            while(runner.next != temp){
                runner = runner.next;
            }
            if(temp == this.tail){
                this.tail = runner;
                this.tail.next = null;
            }else{
                runner.next = temp.next;
            }
            temp.next = this.head;
            this.head = temp;
        }
    }

    display() {
        var runner = this.head;
        var output = '';
        while (runner != null) {
            if (runner == this.tail) {
                output += runner.value;
            }
            else {
                output += runner.value + ' - ';
            }
            runner = runner.next;
        }
        return output;
    }
}

function generateNewList(length, min_value, max_value){
    var newSLL = new SinglyLinkedList();
    for(var i = 0; i < length; ++i){
        newSLL.addToFront(Math.floor(Math.random()*(max_value-min_value))+min_value);
    }
    console.log(newSLL.display());
    return newSLL
}

var newSLL = new generateNewList(20, 0, 20);
