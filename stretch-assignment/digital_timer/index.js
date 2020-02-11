let clock = document.querySelectorAll('.digit');
let startBtn = document.querySelector('.start');
let resetBtn = document.querySelector('.reset');

let def = ['-','-',':','-','-'];
let msTs = 0;
let msHs = 0;
let ones = 1;
let tens = 1;
resetBtn.disabled = true;

let timer;

let reset = () => {
    clearInterval(timer);
    clock.forEach(digit => digit.classList.remove('redDigit'));
    clock.forEach((digit, i) => digit.textContent = def[i]);
    startBtn.disabled = false;
    resetBtn.disabled = true;
    msTs = 0;
    msHs = 0;
    ones = 1;
    tens = 1;
}


let start = () => {
    timer = setInterval(() => {
        startBtn.disabled = true;
        resetBtn.disabled = false;
        if (msTs != 10) {
            clock[4].textContent = msTs;
            msTs++;
        }
        else {
            msTs = 0;
            if (msHs != 10) {
                clock[3].textContent = msHs;
                msHs++;
            }
            else {
                msHs = 0;
                if (ones != 10) {
                    clock[1].textContent = ones;
                    ones++;
                }
                else {
                    clock[4].textContent = 0;
                    clock[3].textContent = 0;
                    clock[1].textContent = 0;
                    clock[0].textContent = tens;
                    clock.forEach(digit => digit.classList.add('redDigit'));
                    clearInterval(timer);
                    return 0;
                }
            }
        }
    }, 10);
}