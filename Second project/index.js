function CheckPrimeNumber() {
    var input = document.getElementById("numberInput").value;
    var result = document.getElementById("result");

     if (input === "") {
        result.innerText = "Please enter a number ❌";
        result.style.color = "red";
        return;
    }

    var num = Number(input);

    if (num <= 1) {
        result.innerText = "Not a prime number";
        result.style.color = "black";
        return;
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            result.innerText = "Not a prime number";
            result.style.color = "red";
            return;
        }
    }

    result.innerText = "Prime number ✔️";
    result.style.color = "green";
}
