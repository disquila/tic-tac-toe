const table = document.querySelector('table');

let whoseTurn = 1;

const M = 3, N = 3;

const arr = new Array(M);
for (i = 0; i < M; i++) {
    arr[i] = new Array(N);
}

fillTable(table, arr);

function fillTable(table, arr) {
    for (j = 0; j < arr.length; j++) {
        const tr = document.createElement('tr')
        tr.id = j;
        for (k = 0; k < arr[j].length; k++) {
            const td = document.createElement('td');
            arr[j][k] = ''
            td.innerHTML = arr[j][k]
            tr.appendChild(td);
        };
        table.appendChild(tr);
    };
};

const cells = document.querySelectorAll('td')

for (l = 0; l < cells.length; l++) {
    cells[l].addEventListener("click", handleClick)
}

function handleClick(event) {
    if (whoseTurn === 1) {
        event.target.innerText = "X"
        arr[event.path[1].id][event.target.cellIndex] = 1
        whoseTurn = -1;
    } else {
        event.target.innerText = "O"
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