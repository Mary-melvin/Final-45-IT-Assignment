
let guestList = ["john", "Able", "Alan", "Klye"];

let cannotCome = guestList [0];

console.log(cannotCome, "Not coming due to prior commitment");

guestList.splice(0, 1, "Adam");

console.log("Good News! We have found a bigger table for Dinner.");

guestList.unshift("Albert");

guestList.push("Matt");

let middleIndex: number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, "Adonis");

console.log("Updated List of our Guests");

guestList.forEach(oneguest => console.log (`Hello ${oneguest}, Would you like to have dinner with me this Monday?`));
