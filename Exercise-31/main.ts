
let userNames = ["Alex","Alan", "Shaun", "Admin", "Paul"];

if(userNames.length === 0){
    console.log("YournArray is empty we need to find some users!")
    
    }else{
        userNames.forEach(oneUser =>{
            if(oneUser === "Admin"){
                 console.log(`Hello ${oneUser}, Would you like see a status report?`)
            }else{
                console.log(`Hello ${oneUser}, Thank you for login in again.`)
            }
        })
    }
