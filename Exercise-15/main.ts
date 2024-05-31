
let guestList = ["Tony", "Johny", "Shaun", "Sharon"];

let cannotCome = guestList [0];

console.log(cannotCome, "not coming Due to Prior Committmenst");

guestList.splice(0, 1, "Paul");

guestList. forEach (guest => console.log (` Hello ${guest}, Would You Like to Have Dinner with me this Monday?`));
