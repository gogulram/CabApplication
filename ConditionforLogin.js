let UserName = "";
let Password = "";
let LengthofPassword = 0;
let lengthofUserName = 0;

function isValidUserName() {

    UserName = document.getElementById("username").value;
    localStorage.setItem("UserName", UserName);
    console.log(UserName);

    lengthofUserName = UserName.trim().length;
    if (lengthofUserName >= 6) //username should be more than 6 characters
    {
        return true;
    } else {
        return false;
    }
    return false;
}

function isValidPassword() {
    Password = document.querySelector("#password").value;
    LengthofPassword = Password.trim().length;
    if (LengthofPassword >= 8) {
        return true;
    } else {
        return false;
    }
    return false;
}

function login() {
    event.preventDefault();
    if ((isValidUserName()) && (isValidPassword())) {
        // UserName = document.getElementById("username").value;
        // console.log(UserName);
        // alert("Username is ", UserName);
        alert("Successfully logged in");
        location.assign("CabTypes.html");
    } else {
        alert("Sorry, Invalid Credentials");
        location.reload();
    }
}