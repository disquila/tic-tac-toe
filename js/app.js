const elemModal = document.querySelector('.modal');
const restart = document.querySelector('#exampleModalToggle2');
const table = document.querySelector('table');
const gameBtn = document.querySelector('.game').addEventListener('click', begin);

let size = 0,
    win = 0,
    counter = 0,
    whoseTurn = 1,
    arr = [];

window.addEventListener('load', () => {
    const modal = new bootstrap.Modal(elemModal);
    modal.show();
});

function begin() {
    size = Number(document.querySelector('.size').value);
    win = Number(document.querySelector('.win-line').value);
    createArr();
    fillTable();
    clickListen();
};

function createArr() {
    arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = new Array(size);
    };
};

function fillTable() {
    table.innerHTML = '';

    for (let j = 0; j < arr.length; j++) {
        const tr = table.insertRow();

        for (let k = 0; k < arr[j].length; k++) {
            const td = tr.insertCell();
            switch (true) {
                case size <= 3:
                    td.classList.add('small');
                    break;
                case size <= 5:
                    td.classList.add('medium');
                    break;
                case size >= 6:
                    td.classList.add('large');
                    break;
            };
        };
    };
};

function clickListen() {
    const cells = document.querySelectorAll('td');

    for (let m = 0; m < cells.length; m++) {
        cells[m].addEventListener('click', handleClick);
    };
};

function handleClick(event) {
    event.target.classList.add('no-click');
    if (whoseTurn === 1) {
        turn('cross', 'X', -1);
        isWin();
    } else {
        turn('zero', 'O', 1);
        isWin();
    };
};

function turn(style, letter, wt) {
    event.target.innerHTML = `<p class="text-td ${style}">${letter}</p>`;
    arr[event.target.parentNode.rowIndex][event.target.cellIndex] = letter;
    whoseTurn = wt;
};

function isWin() {
    // по горизонтали
    for (let n = -(win - 1); n < win; n++) {
        if (arr[event.target.parentNode.rowIndex][event.target.cellIndex + n] === event.target.innerText) {
            counter++
        };
    };
    endGame(`<p class="text-center fs-3">Победил ${event.target.innerText}</p>`);

    // по вертикали
    for (let o = -(win - 1); o < win; o++) {
        if (arr[event.target.parentNode.rowIndex + o]) {
            if (arr[event.target.parentNode.rowIndex + o][event.target.cellIndex] === event.target.innerText) {
                counter++
            };
        };
    };
    endGame(`<p class="text-center fs-3">Победил ${event.target.innerText}</p>`);

    // по диагонали
    for (let p = -(win - 1); p < win; p++) {
        if (arr[event.target.parentNode.rowIndex + p]) {
            if (arr[event.target.parentNode.rowIndex + p][event.target.cellIndex + p] === event.target.innerText
                || arr[event.target.parentNode.rowIndex + p][event.target.cellIndex - p] === event.target.innerText) {
                counter++
            };
        };
    };
    endGame(`<p class="text-center fs-3">Победил ${event.target.innerText}</p>`);

    // ничья
    for (let q = 0; q < arr.length; q++) { 
        if (arr[q].includes(undefined) === false) {
            counter--
        };
    };
    if (counter === -size) {
    endGame(`<p class="text-center fs-3">Ничья</p>`);}
};

function endGame(winner) {
    if (counter === win || counter === -size) {
        whoseTurn = 1;
        const modalRst = new bootstrap.Modal(restart);
        modalRst.show();
        document.querySelector('.end-game').innerHTML = winner;
    } else { counter = 0 };
};