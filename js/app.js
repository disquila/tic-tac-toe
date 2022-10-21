const elemModal = document.querySelector('.modal');
const restart = document.querySelector('#exampleModalToggle2');
const table = document.querySelector('table');
const gameBtn = document.querySelector('.btn-success').addEventListener('click', begin);

let size = 0;

let win = 0;

let whoseTurn = 1;

let arr = [];

window.addEventListener('load', () => {
    const modal = new bootstrap.Modal(elemModal);
    modal.show();
});

function createArr() {
    arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = new Array(size);
    }
    return arr;
}

function begin() {
    size = Number(document.querySelector('.size').value);
    win = Number(document.querySelector('.win-line').value);
    fillTable(table, createArr());
    clickListen();
};

function fillTable(table, arr) {
    table.innerHTML = '';
    for (j = 0; j < arr.length; j++) {
        const tr = table.insertRow();
        for (let k = 0; k < arr[j].length; k++) {
            const td = tr.insertCell();
            if (size < 4) {
                td.classList.add('small');
            }
            else if (size > 3) {
                td.classList.add('medium');
            }
            else if (size > 6) {
                td.classList.add('large');
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

    function handleClick(event) {
        function winner() {
            whoseTurn = 1;
            const modalRst = new bootstrap.Modal(restart);
            document.querySelector('.winner').innerHTML = '';
            modalRst.show();
            document.querySelector('.winner').insertAdjacentHTML('afterbegin', `<p class="text-center fs-3">Победил ${event.srcElement.innerText}</p>`);
        };
        function isWin() {
            let winX = 0,
                winO = 0;
            // по горизонтали
            for (let n = -(win - 1); n < 5; n++) {
                if (arr[event.target.parentNode.rowIndex][event.target.cellIndex + n] == 1) {
                    winX++
                };
                if (arr[event.target.parentNode.rowIndex][event.target.cellIndex + n] == -1) {
                    winO++
                };
            };
            if (winX == win || winO == win) {
                winner();
            } else { winX = 0, winO = 0 };

            // по вертикали
            for (let o = -(win - 1); o < 5; o++) {
                if (arr[event.target.parentNode.rowIndex + o]) {
                    if (arr[event.target.parentNode.rowIndex + o][event.target.cellIndex] == 1) {
                        winX++
                    };
                    if (arr[event.target.parentNode.rowIndex + o][event.target.cellIndex] == -1) {
                        winO++
                    };
                };
            };
            if (winX == win || winO == win) {
                winner();
            } else { winX = 0, winO = 0 };

            // по диагонали
            for (let p = -(win - 1); p < 5; p++) {
                if (arr[event.target.parentNode.rowIndex + p]) {
                    if (arr[event.target.parentNode.rowIndex + p][event.target.cellIndex + p] == 1
                        || arr[event.target.parentNode.rowIndex + p][event.target.cellIndex - p] == 1) {
                        winX++
                    };
                    if (arr[event.target.parentNode.rowIndex + p][event.target.cellIndex + p] == -1
                        || arr[event.target.parentNode.rowIndex + p][event.target.cellIndex - p] == -1) {
                        winO++
                    };
                };
            };
            if (winX == win || winO == win) {
                winner();
            } else { winX = 0, winO = 0 };
        };
        if (whoseTurn === 1) {
            event.target.innerHTML = '<p class="text-td cross">X</p>';
            arr[event.target.parentNode.rowIndex][event.target.cellIndex] = 1;
            whoseTurn = -1;
            isWin();
        } else {
            event.target.innerHTML = '<p class="text-td zero">O</p>';
            arr[event.target.parentNode.rowIndex][event.target.cellIndex] = -1;
            whoseTurn = 1;
            isWin();
        };
    };
};