
function make_Album (Artist_name: string, Album_title: string, tracks?: number){
    let Album: {Artist: string, title: string, tracks?: number} ={
        Artist: Artist_name,
        title: Album_title,
    };
    if (tracks !== undefined){
        Album.tracks = tracks;
    }
    return Album;
}
let Album1 = make_Album ("Atif Aslam", "Album title 1" );

let Album2 = make_Album ("Sajjad Ali", "Album title 2" );

let Album3 = make_Album ("Ali Zafar", "Album title 3", 10);

console.log(Album1);

console.log(Album2);

console.log(Album3);

