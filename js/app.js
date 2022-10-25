const elemModal = document.querySelector('.modal');
const restart = document.querySelector('#exampleModalToggle2');
const table = document.querySelector('table');
const gameBtn = document.querySelector('.btn-success').addEventListener('click', begin);

let size = 0,
    win = 0,
    winX = 0,
    winO = 0,
    whoseTurn = 1,
    arr = [];

window.addEventListener('load', () => {
    const modal = new bootstrap.Modal(elemModal);
    modal.show();
});

function begin() {
    size = Number(document.querySelector('.size').value);
    win = Number(document.querySelector('.win-line').value);
    fillTable(table, createArr());
    clickListen();
};

function createArr() {
    arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = new Array(size);
    }
    return arr;
}

function fillTable(table, arr) {
    table.innerHTML = '';
    for (j = 0; j < arr.length; j++) {
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
            arr[j][k] = '';
            td.innerHTML = arr[j][k];
        };
    };
};

function clickListen() {
    const cells = document.querySelectorAll('td');

    for (m = 0; m < cells.length; m++) {
        cells[m].addEventListener('click', handleClick);
    };
};

function winner() {
    if (winX === win || winO === win) {
        whoseTurn = 1;
        const modalRst = new bootstrap.Modal(restart);
        document.querySelector('.winner').innerHTML = '';
        modalRst.show();
        document.querySelector('.winner').insertAdjacentHTML('afterbegin', `<p class="text-center fs-3">Победил ${event.srcElement.innerText}</p>`);
    } else { winX = 0, winO = 0 };
};

function isWin() {
    // по горизонтали
    for (let n = -(win - 1); n < 5; n++) {
        if (arr[event.target.parentNode.rowIndex][event.target.cellIndex + n] === 1) {
            winX++
        };
        if (arr[event.target.parentNode.rowIndex][event.target.cellIndex + n] === -1) {
            winO++
        };
    };
    winner()

    // по вертикали
    for (let o = -(win - 1); o < 5; o++) {
        if (arr[event.target.parentNode.rowIndex + o]) {
            if (arr[event.target.parentNode.rowIndex + o][event.target.cellIndex] === 1) {
                winX++
            };
            if (arr[event.target.parentNode.rowIndex + o][event.target.cellIndex] === -1) {
                winO++
            };
        };
    };
    winner()

    // по диагонали
    for (let p = -(win - 1); p < 5; p++) {
        if (arr[event.target.parentNode.rowIndex + p]) {
            if (arr[event.target.parentNode.rowIndex + p][event.target.cellIndex + p] === 1
                || arr[event.target.parentNode.rowIndex + p][event.target.cellIndex - p] === 1) {
                winX++
            };
            if (arr[event.target.parentNode.rowIndex + p][event.target.cellIndex + p] === -1
                || arr[event.target.parentNode.rowIndex + p][event.target.cellIndex - p] === -1) {
                winO++
            };
        };
    };
    winner()
};

function handleClick(event) {
    if (whoseTurn === 1) {
        turn('cross', 'X', 1, -1)
        isWin();
    } else {
        turn('zero', 'O', -1, 1)
        isWin();
    };
};

function turn(style, letter, index, wt) {
    event.target.innerHTML = `<p class="text-td ${style}">${letter}</p>`;
    arr[event.target.parentNode.rowIndex][event.target.cellIndex] = index;
    whoseTurn = wt;
}