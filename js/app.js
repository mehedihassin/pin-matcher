function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const getString = pin + '';
    if (getString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
};

function generateButton() {
    const pin = getPin();
    document.getElementById('get-pin-input').value = pin;
};

document.getElementById('cal-numbers').addEventListener('click', function (event) {
    const number = event.target.innerText;
    console.log(number);
    const calInput = document.getElementById('call-input-section');

    if (isNaN(number)) {
        if (number == 'C') {
            calInput.value = '';
        }

    }
    else {
        const previusNumber = calInput.value;
        const newNumber = previusNumber + number;
        calInput.value = newNumber;
    }

});

function submiteButton() {

    const pin = document.getElementById('get-pin-input').value;
    const inputNumbers = document.getElementById('call-input-section').value;
    const successMessage = document.getElementById('pin-mached');
    const failedMessage = document.getElementById('pin-dont-mached');

    if (pin == inputNumbers) {
        successMessage.style.display = 'block';
        failedMessage.style.display = 'none';
    }
    else {
        failedMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }

};








