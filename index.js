const calcKeysContainer = document.querySelector('.calculator-keys');
const display = document.querySelector('#calculator-screen');

calcKeysContainer.addEventListener('click', (event) => {
    console.log(event.target.classList)
    if (event.target.classList.contains('all-clear')) {
        display.value = '';
        return;
    }

    if (event.target.classList.contains('equal-sign')) {
        display.value = eval(display.value).toFixed(5);
        return;
    }

    display.value += event.target.value;
});