function make_Album(Artist_name, Album_title, tracks) {
    var Album = {
        Artist: Artist_name,
        title: Album_title,
    };
    if (tracks !== undefined) {
        Album.tracks = tracks;
    }
    return Album;
}
var Album1 = make_Album("Atif Aslam", "Album title 1");
var Album2 = make_Album("Sajjad Ali", "Album title 2");
var Album3 = make_Album("Ali Zafar", "Album title 3", 10);
console.log(Album1);
console.log(Album2);
console.log(Album3);
