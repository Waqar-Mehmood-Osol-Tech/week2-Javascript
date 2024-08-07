// Immediately Invoked Function Expression

(function myfunc() {
    console.log('DB connected');
})()

// Sometimes there is pollution caused due to the scope of the global variables so thats why we use 
// Immediately Invoked Function Expression (IIFE) to prevent the pollution of global scope.

(function myfunc() {
    console.log('DB connected');
})();

