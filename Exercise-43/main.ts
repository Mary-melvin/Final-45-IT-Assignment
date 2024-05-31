

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_Great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

let magician_names = ["Melvin", "Mathhias", "Paul"]

let copy_magician_names = magician_names.slice();

let copy_great_magicians = make_Great(copy_magician_names);

console.log("\noriginal Array\n")
show_magicians(magician_names);

console.log("\n coppied Array\n")
show_magicians(copy_great_magicians);

