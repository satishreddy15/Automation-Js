function userValidationLogin(username, password) {
    if (username === "validUser" && password === "Valid@123") {
        return "You have successfully logged in";
    }
    else if (username === "invalidUser" && password === "invalid#123") {
        return "Sorry You have given Invalid Credentials, please give valid credentials";
    }
    else if (username === "lockedUser" && password === "locked@123") {
        return "Sorry Your Account has Locked, you have entered the password too many times";
    }
    else if (username === "guestUser" && password === "Guest@123") {
        return "You have logged in successfully as a guest";
    }
    else {
        return "Password is missing please enter password";
    }
}
let users = [
  { id: "User1", username: "validUser", password: "Valid@123" },
  { id: "User2", username: "invalidUser", password: "invalid#123" },
  { id: "User3", username: "lockedUser", password: "locked@123" },
  { id: "User4", username: "guestUser", password: "Guest@123" },
  { id: "User5", username: "emptyUser", password: "" }
];
for (let i = 0; i < users.length; i++) {
  let result = userValidationLogin(users[i].username, users[i].password);
    console.log("username:", users[i].username);
    console.log("password:", users[i].password);
    console.log("result:", result);    // returns the return given data in result..
}







 
































































