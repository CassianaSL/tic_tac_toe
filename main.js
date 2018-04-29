const inx = document.querySelector('#x');
const spx = document.querySelector('#xx');
const ino = document.querySelector('#o');
const spo = document.querySelector('#oo');
const bures = document.querySelector('#res');
const bunew = document.querySelector('#new');
const table = document.querySelector('table');
const td = document.querySelectorAll('td');
inx.addEventListener('keyup', function(e) {
    if (e.code === 'Enter') {
        spx.textContent = inx.value;
        spx.append(inx);
        inx.style.display = 'none';
    }
});
ino.addEventListener('keyup', function(e) {
    if (e.code === 'Enter') {
        spo.textContent = ino.value;
        spo.append(ino);
        ino.style.display = 'none';
    }
});
let car = 'X';
let jogo = 1;
const detectaMov = function(e) {
    if (jogo === 1) {
        const pos = [];
        if (e.target.tagName === 'TD') {
            const td = e.target;
            if (td.textContent !== 'X' && td.textContent !== 'O') {
                td.textContent = car;
            }
            if (car === 'X') car = 'O';
            else if (car === 'O') car = 'X';
        }
        for (let i = 0; i < td.length; i++) {
            pos[i] = td[i].textContent;
        }
        const t = test(pos);
        if (t === 'X' || t === 'O' || t === 'em') win(t);
    }
};
function test(pos) {
    let r = 'em';
    for (let i = 0; i < pos.length; i++) {
        if (pos[i] === '') r = '';
    }
    if ((pos[0] === pos[1]) && (pos[1] === pos[2])) r = pos[0];
    else if ((pos[0] === pos[3]) && (pos[3] === pos[6])) r = pos[0];
    else if ((pos[0] === pos[4]) && (pos[4] === pos[8])) r = pos[0];
    else if ((pos[1] === pos[4]) && (pos[4] === pos[7])) r = pos[1];
    else if ((pos[2] === pos[5]) && (pos[5] === pos[8])) r = pos[2];
    else if ((pos[2] === pos[4]) && (pos[4] === pos[6])) r = pos[2];
    else if ((pos[3] === pos[4]) && (pos[4] === pos[5])) r = pos[3];
    else if ((pos[6] === pos[7]) && (pos[7] === pos[8])) r = pos[6];
    return r;
}
table.addEventListener('click', detectaMov);
let valx = 0;
let valo = 0;
let vel = 0;
function win(win) {
    if (win === 'X') {
        win = document.querySelector('#vx');
        win.textContent = `X ${++valx}`;
        jogo--;
    } else if (win === 'O') {
        win = document.querySelector('#vo');
        win.textContent = `O ${++valo}`;
        jogo--;
    } else {
        win = document.querySelector('#em');
        win.textContent = `${++vel}`;
        jogo--;
    }
    newTable();
}
bunew.addEventListener('click', function(e) {
    location.reload();
});
function newTable() {
    for (let i = 0; i < td.length; i++) {
        td[i].textContent = '';
    }
    jogo = 1;
    car = 'X';
}
bures.addEventListener('click', newTable);
