function checkOddEven() {
    var num = document.getElementById("number").value;
    var result = document.getElementById("result");

    if (num === "") {
        result.innerText = "Please enter a number ❌";
        result.style.color = "red";
    } else if (num % 2 === 0) {
        result.innerText = "Even Number ✔️";
        result.style.color = "green";
    } else {
        result.innerText = "Odd Number ✔️";
        result.style.color = "blue";
    }
}
