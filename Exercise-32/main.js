var current_users = ["Alex", "Alan", "John", "Shaun", "Tony"];
var new_users = ["Melvin", "Mathias", "Mary", "Shaun", "Sherry"];
new_users.forEach(function (new_user) {
    var new_userLower = new_user.toLowerCase();
    var userNameTaken = current_users.some(function (current_user) { return current_user.toLowerCase() === new_userLower; });
    if (userNameTaken) {
        console.log(" ".concat(new_user, " needs to choose n new ucername because it's already taken\n"));
    }
    else {
        console.log(" ".concat(new_user, " is the new member added"));
        current_users.push(new_user);
    }
});
console.log(current_users);
