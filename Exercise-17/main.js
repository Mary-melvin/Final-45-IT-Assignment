var myFreinds = ["Alex", "Paul", "Shaun", "john", "Shane", "Alan"];
console.log("Table is not available I can invite only 2 person \n");
var freind1 = myFreinds.pop();
console.log("Sorry Mr. ".concat(freind1, " You are not Invited!"));
var freind2 = myFreinds.pop();
console.log("Sorry Mr. ".concat(freind2, " You are not Invited!"));
var freind3 = myFreinds.pop();
console.log("Sorry Mr. ".concat(freind3, " You are not Invited!"));
var freind4 = myFreinds.pop();
console.log("Sorry Mr. ".concat(freind4, " You are not Invited!"));
for (var i = 0; i < myFreinds.length; i++) {
    console.log(" Mr. ".concat(myFreinds[i], " You are Still Invited!"));
}
myFreinds.pop();
myFreinds.pop();
console.log(myFreinds);
