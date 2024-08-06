// For Loop
let array = [1, 2, 3, 4, 5]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}


// Nested Loops
for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);

    for (let j = 0; j <= 10; j++) {
        console.log(`inner loop value: ${j} and inner loop ${i}`);
    }
}

// Continue and Break
for(let i = 0; i < 20; i++){
   if(i === 5){
    console.log("Detected number 5.....");
    // break;
    continue;
   }
   console.log(`Value of i is: ${i}.`);   
}