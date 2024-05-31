
function makeSandwich(...items: string[]){

console.log("\nMaking a Sandwich with the following items: \n");

items.forEach(singleItem => console.log(singleItem));

console.log("\n Now Enjoy Sandwich");    
}

makeSandwich("Chicken", "Cheese", "Mayo garlic","Sussages");

makeSandwich("Eggs", "Butter", "Lettuce");

makeSandwich("Chicken Pattie", "Salami", "Cucumber", "Tomatoes");
