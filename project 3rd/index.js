function togglePassword() {
    let password = document.getElementById("password");
    let toggle = document.querySelector(".toggle");

    if (password.type === "password") {
        password.type = "text";
        toggle.innerText = "Hide";
    } else {
        password.type = "password";
        toggle.innerText = "Show";
    }
}

function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (name === "" || email === "" || password === "") {
        result.innerText = "Please fill all fields ❌";
        result.style.color = "red";
    } else {
        result.innerText = "Signup Successful ✅";
        result.style.color = "green";
    }





    function showPassWord() {
        var passwordField = document.getElementById("password");
        var showPasswordIcon = document.getElementById("showPassword");
        if (passwordField.type === "password") {
            passwordField.type = "text";

        } else if 
        else {
            passwordField.type = "password";
        }
    }

}