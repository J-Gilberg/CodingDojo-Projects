class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


class BST {
    constructor() {
        this.root = null
    }

    addNode(value){
        let node = new BSTNode(value);
        if(this.root === null){
            this.root = node;
        }else{
            let runner = this.root;
            while(runner){
                if(node.value < runner.value){
                    if(runner.left){
                        runner = runner.left;
                        console.log()
                    }else{
                        runner.left = node;
                        break;
                    }
                }
                else{
                    if(runner.right){
                        runner = runner.right;
                    }else{
                        runner.right = node;
                        break;
                    }
                }
            }
        }
    }

    findMin() {
        let runner = this.root;
        while(runner.left){
            runner = runner.left;
        }
        return runner.value;
    }

    findMax() {
        let runner = this.root;
        while(runner.right){
            runner = runner.right;
        }
        return runner.value;
    }

    print(){

    }
}

var list = new BST();
list.addNode(10);
list.addNode(12);
list.addNode(11);
list.addNode(11);
list.addNode(9);
list.addNode(8);
list.addNode(6);
list.addNode(7);
list.addNode(1);
list.addNode(18);
list.addNode(10);

console.log(list.findMax());
console.log(list.findMin());




