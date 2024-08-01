const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// by the above the code on the 3 index there is complete array so if 
// want to get the "flash" value so we can do this like that.
// and one more thing it is got cleared from the above code arrays dont merge..
// they are just added as a value in the array. so if we want to get the value

// console.log(marvel_heroes[3][1]);

// Concat with arrays 
// marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);


// Spread Operators
const all_new_heroes = [...dc_heroes, ...marvel_heroes]
// console.log(all_new_heroes);

// Flat Function
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);


// To check whether it is array or not or you want to convert into array 
console.log(Array.isArray("Waqar"));
console.log(Array.from("Waqar"));  
console.log(Array.from({name: "Waqar"}))  // Interesting

let score1 = 100 
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
