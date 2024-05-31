var userNames = ["Alex", "Alan", "Adonis", "Admin", "Paul"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for loggin in again."));
    }
});
