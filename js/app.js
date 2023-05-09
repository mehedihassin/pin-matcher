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








