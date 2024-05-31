
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_Great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

let magician_names = ["Melvin", "Mathhias", "Paul"]

let great_magicians = make_Great(magician_names);

show_magicians(great_magicians);

