
let current_users = ["Alex","Alan","John","Shaun","Tony"];
let new_users = ["Melvin", "Mathias", "Mary", "Shaun", "Sherry"];

new_users. forEach(new_user => {
    let new_userLower = new_user.toLowerCase();

let userNameTaken = current_users.some (current_user => current_user.toLowerCase() === new_userLower); 

if(userNameTaken){
    console.log(` ${new_user} needs to choose n new ucername because it's already taken\n`);

}else{
console.log(` ${new_user} is the new member added`);
current_users.push(new_user)
}

});
console.log(current_users);