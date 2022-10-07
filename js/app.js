const table = document.querySelector('table');

let size = 3;

let whoseTurn = 1;

let arr = '' 

function createArr() {
    arr = new Array(size);
    for (i = 0; i < size; i++) {
        arr[i] = new Array(size);
    }
    return arr
}

fillTable(table, createArr());

function fillTable(table, arr) {
    table.innerHTML = '';
    for (j = 0; j < arr.length; j++) {
        const tr = document.createElement('tr')
        tr.id = j;
        for (k = 0; k < arr[j].length; k++) {
            const td = document.createElement('td');
            if (size === 3) {
                td.classList.add('small');
            } else if (size === 6) {
                td.classList.add('medium');
            }
            else if (size === 9) {
                td.classList.add('large');
            }
            arr[j][k] = ''
            td.innerHTML = arr[j][k]
            tr.appendChild(td);
        };
        table.appendChild(tr);
    };
};

const checked = Array.from(document.querySelectorAll('.form-check-input'));

for (l = 0; l < checked.length; l++) {
    checked[l].addEventListener('click', elClick)
};

function elClick() {
    checked.forEach(function (item) {
        if (item.checked) {
            size = Number(item.value)
            fillTable(table, createArr());
            clickListen();
        }
    }
    );
};

function clickListen() {
    const cells = document.querySelectorAll('td')

    for (m = 0; m < cells.length; m++) {
        cells[m].addEventListener('click', handleClick)
    }

    function handleClick(event) {
        if (whoseTurn === 1) {
            event.target.innerHTML = '<p class="text-td cross">X</p>'
            arr[event.path[1].id][event.target.cellIndex] = 1
            whoseTurn = -1;
        } else {
            event.target.innerHTML = '<p class="text-td zero">O</p>'
            arr[event.path[1].id][event.target.cellIndex] = -1
            whoseTurn = 1;
        };

        if (arr[0][0] === 1 & arr[0][1] === 1 & arr[0][2] === 1) {
            table.insertAdjacentHTML('afterend', '<p>Win "X"!</p>');
        }
        else if (arr[1][0] === 1 & arr[1][1] === 1 & arr[1][2] === 1) {
            table.insertAdjacentHTML('afterend', '<p>Win "X"!</p>');
        }
        else if (arr[2][0] === 1 & arr[2][1] === 1 & arr[2][2] === 1) {
            table.insertAdjacentHTML('afterend', '<p>Win "X"!</p>');
        }
        else if (arr[0][0] === 1 & arr[1][0] === 1 & arr[2][0] === 1) {
            table.insertAdjacentHTML('afterend', '<p>Win "X"!</p>');
        }
        else if (arr[0][1] === 1 & arr[1][1] === 1 & arr[2][1] === 1) {
            table.insertAdjacentHTML('afterend', '<p>Win "X"!</p>');
        }
        else if (arr[0][2] === 1 & arr[1][2] === 1 & arr[2][2] === 1) {
            table.insertAdjacentHTML('afterend', '<p>Win "X"!</p>');
        }
        else if (arr[0][0] === 1 & arr[1][1] === 1 & arr[2][2] === 1) {
            table.insertAdjacentHTML('afterend', '<p>Win "X"!</p>');
        }
        else if (arr[0][2] === 1 & arr[1][1] === 1 & arr[2][0] === 1) {
            table.insertAdjacentHTML('afterend', '<p>Win "X"!</p>');
        }
        else if (arr[0][0] === -1 & arr[0][1] === -1 & arr[0][2] === -1) {
            table.insertAdjacentHTML('afterend', '<p>Win "O"!</p>');
        }
        else if (arr[1][0] === -1 & arr[1][1] === -1 & arr[1][2] === -1) {
            table.insertAdjacentHTML('afterend', '<p>Win "O"!</p>');
        }
        else if (arr[2][0] === -1 & arr[2][1] === -1 & arr[2][2] === -1) {
            table.insertAdjacentHTML('afterend', '<p>Win "O"!</p>');
        }
        else if (arr[0][0] === -1 & arr[1][0] === -1 & arr[2][0] === -1) {
            table.insertAdjacentHTML('afterend', '<p>Win "O"!</p>');
        }
        else if (arr[0][1] === -1 & arr[1][1] === -1 & arr[2][1] === -1) {
            table.insertAdjacentHTML('afterend', '<p>Win "O"!</p>');
        }
        else if (arr[0][2] === -1 & arr[1][2] === -1 & arr[2][2] === -1) {
            table.insertAdjacentHTML('afterend', '<p>Win "O"!</p>');
        }
        else if (arr[0][0] === -1 & arr[1][1] === -1 & arr[2][2] === -1) {
            table.insertAdjacentHTML('afterend', '<p>Win "O"!</p>');
        }
        else if (arr[0][2] === -1 & arr[1][1] === -1 & arr[2][0] === -1) {
            table.insertAdjacentHTML('afterend', '<p>Win "O"!</p>');
        }
    }
}
clickListen();