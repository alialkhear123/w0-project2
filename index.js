const container = document.createElement('div');

const digits = document.querySelector('.digits');
let newDigits = digits;
digits.remove();
container.appendChild(newDigits);

const startBtn = document.createElement('button');
startBtn.classList.add('start');
startBtn.textContent = 'Start';
startBtn.style.width = '50%'
const resetBtn = document.createElement('button');
resetBtn.classList.add('reset');
resetBtn.textContent = 'reset';
resetBtn.style.width = '50%'
const innerdiv = document.createElement('div');
innerdiv.appendChild(startBtn);
innerdiv.appendChild(resetBtn);
container.appendChild(innerdiv)
container.style.display = 'flex';
container.style.flexDirection = 'column ';
document.querySelector('body').appendChild(container);

let secondTens = 0;
let secondOnes = 0;
let msHundreds = 0;
let msTens = 0;

var startInterval;

function start() {

    startInterval = setInterval(() => {
        document.getElementById('msTens').textContent = ++msTens;
        if (msTens === 9) {
            msTens = 0;
            document.getElementById('msHundreds').textContent = ++msHundreds;
            if (msHundreds === 9) {
                msTens = 0;
                msHundreds = 0;

                document.getElementById('secondOnes').textContent = ++secondOnes;
                if (secondOnes === 10) {
                    msTens = 0;
                    msHundreds = 0;
                    secondOnes = 0;
                    document.getElementById('secondOnes').textContent = 0;
                    document.getElementById('secondTens').textContent = ++secondTens;
                    if (secondTens === 1) {

                        document.getElementById('msTens').textContent = 0;
                        document.getElementById('msHundreds').textContent = 0;
                        msTens = 0;
                        msHundreds = 0;
                        secondOnes = 0;
                        clearInterval(startInterval);

                    }
                }
            }
        }
    }, 10);

};


function reset() {
    secondTens = 0;
    secondOnes = 0;
    msHundreds = 0;
    msTens = 0;

    document.getElementById('msTens').textContent = '-';
    document.getElementById('msHundreds').textContent = '-';
    document.getElementById('secondOnes').textContent = '-';
    document.getElementById('secondTens').textContent = '-';

    clearInterval(startInterval);
};

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    start();
});

resetBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    reset();
});
