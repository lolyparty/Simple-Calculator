const calcKeysContainer = document.querySelector('.calculator-keys');
const display = document.querySelector('#calculator-screen');
display.value = '0'

calcKeysContainer.addEventListener('click', (event) => {
    console.log(event.target.classList)
    if (event.target.classList.contains('all-clear')) {
        display.value = '0';
        return;
    }

    if (event.target.classList.contains('equal-sign')) {
        display.value = eval(display.value).toFixed(5);
        return;
    }

    display.value === '0' ? display.value = event.target.value : display.value += event.target.value;
});