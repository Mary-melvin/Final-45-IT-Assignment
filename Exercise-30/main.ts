
let userNames = ["Alex", "Alan", "Adonis", "Admin","Paul"];

userNames.forEach(oneUser =>{
if(oneUser === "Admin"){
    console.log(`Hello ${oneUser}, Would you like to see a status report?`)

}else{
    console.log(`Hello ${oneUser}, Thank you for loggin in again.`)
}

})