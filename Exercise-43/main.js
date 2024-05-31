function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_Great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Melvin", "Mathhias", "Paul"];
var copy_magician_names = magician_names.slice();
var copy_great_magicians = make_Great(copy_magician_names);
console.log("\noriginal Array\n");
show_magicians(magician_names);
console.log("\n coppied Array\n");
show_magicians(copy_great_magicians);
