// Stack (primitive datatypes), Heap (Non-primitive)
// Stack is faster, but limited in size, Heap is slower, but can grow dynamically
// Stack is used for local variables, Heap is used for global variables
// Stack is used for function calls, Heap is used for dynamic memory allocation
// Stack is used for primitive datatypes, Heap is used for objects
// Stack is used for recursive function calls, Heap is used for non-recursive function calls

// Stack memory gives you copy of the variable
// Heap memory gives you the reference of actual value


let name = 'Waqar'


let anotherName = name;
anotherName = "Mehmood";

console.log(name);
console.log(anotherName);


// Heap concept
let user1 = {
    name: 'Waqar',
    email: 'waqar@gmail.com',
    id: 123
}

let user2 = user1

user2.email = "mehmood@gmail.com"

// Value for both user changes because they are pointing at the same reference in the heap
console.log(user1.email);
console.log(user2.email);










