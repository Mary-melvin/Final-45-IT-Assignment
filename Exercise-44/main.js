function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy Sandwich");
}
makeSandwich("Chicken", "Cheese", "Mayogarlic", "Sussages");
makeSandwich("Eggs", "Butter", "Lettuce");
makeSandwich("Chicken Pattie", "Salami", "Cucumber", "Tomatoes");
