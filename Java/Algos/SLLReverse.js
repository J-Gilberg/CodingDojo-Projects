class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }
    display() {
        let result = "";
        let runner = this.head;
        while (runner != null) {
            result += `${runner.value}--> `;
            runner = runner.next;
        }
        console.log(result);
        return this
    }

    reverseList() {
        var runner = this.head;
        var previous = null;
        var swap = this.head;

        while (runner != null) {
            swap = runner.next;
            runner.next = previous;
            previous = runner;
            runner = swap;
        }
        this.head = previous;

        console.log("head");
        console.log(this.head)
        return this
    }
}

var list = new SLL();

list.addToFront(1);
list.addToFront(2);
list.addToFront(3);
list.addToFront(4);
list.addToFront(5);

list.display().reverseList().display();

