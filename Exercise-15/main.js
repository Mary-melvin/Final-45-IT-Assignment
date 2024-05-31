var guestList = ["Tony", "Johny", "Shaun", "Sharon"];
var cannotCome = guestList[0];
console.log(cannotCome, "not coming Due to Prior Committmenst");
guestList.splice(0, 1, "Paul");
guestList.forEach(function (guest) { return console.log(" Hello ".concat(guest, ", Would You Like to Have Dinner with me this Monday?")); });
