function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_Great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Melvin", "Mathhias", "Paul"];
var great_magicians = make_Great(magician_names);
show_magicians(great_magicians);
