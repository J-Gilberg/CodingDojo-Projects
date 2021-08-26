



var x = new SLLStack();

console.log(x.pop());
console.log(x.top());
console.log(x.contains(1));
console.log(x.isEmpty());
console.log(x.size());

x.push(7);
x.push(3);
x.push(8);

console.log(x.top());
console.log(x.pop());
console.log(x.contains(8));
console.log(x.contains(7));
console.log(x.isEmpty());
console.log(x.size());

