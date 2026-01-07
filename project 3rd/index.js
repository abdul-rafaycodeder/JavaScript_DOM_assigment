function showPassWord() {
    var passwordField = document.getElementById("password");
    var showPasswordIcon = document.getElementById("showPassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function signup() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var result = document.getElementById("result");

    if (name === "" || email === "" || password === "") {
        result.innerText = "Please fill all fields ❌";
        result.style.color = "red";
    } else {
        result.innerText = "Signup Successful ✅";
        result.style.color = "green";
    }
}
