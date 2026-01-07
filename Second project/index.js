function CheckPrimeNumber() {
    var num = Number(document.getElementById("numberInput").value);
    var result = document.getElementById("result");
    if (num <= 1) {
        result.textContent = "Not a prime number";
    } else {
        var isPrime = true;
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }


        if (isPrime) {
            result.textContent = "Prime number";
        } else {
            result.textContent = "Not a prime number";
        }
    }

}