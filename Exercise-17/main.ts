
const myFreinds: string [] = ["Alex", "Paul", "Shaun", "john", "Shane", "Alan"];
console.log (`Table is not available I can invite only 2 person \n`);


let freind1 = myFreinds.pop ();
console.log (`Sorry Mr. ${freind1} You are not Invited!`);

let freind2 = myFreinds.pop ();
console.log (`Sorry Mr. ${freind2} You are not Invited!`);

let freind3 = myFreinds.pop ();
console.log (`Sorry Mr. ${freind3} You are not Invited!`);

let freind4 = myFreinds.pop ();
console.log (`Sorry Mr. ${freind4} You are not Invited!`);

for(let i = 0; i < myFreinds.length; i++){
console.log(` Mr. ${myFreinds[i]} You are Still Invited!`);

}
myFreinds.pop();
myFreinds.pop();

console.log(myFreinds);







