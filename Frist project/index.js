var number = 0;

function RunNumbers(event) {
    var numberElement = document.querySelector('.number_container h1');

    if (event === 'decrease') {
        number--;
    } else if (event === 'reset') {
        number = 0;
    } else if (event === 'increase') {
        number++;
    }

    numberElement.textContent = number;
}